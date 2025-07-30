import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/utils/db'
import { z } from 'zod'

const leadSchema = z.object({
  email: z.string().email('Неверный формат email'),
  phone: z.string().min(10, 'Неверный формат телефона'),
  source: z.string(),
  domain: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const data = leadSchema.parse(req.body)

    const lead = await prisma.lead.create({
      data,
    })

    // Отправка в Telegram
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      const message = `
🎯 Новая заявка!
📧 Email: ${data.email}
📱 Телефон: ${data.phone}
🌐 Источник: ${data.source}
🔗 Домен: ${data.domain}
      `

      await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message,
          }),
        }
      )
    }

    res.status(200).json({ success: true, id: lead.id })
  } catch (error) {
    console.error('Form submission error:', error)
    res.status(400).json({ 
      success: false, 
      message: error instanceof z.ZodError 
        ? error.errors[0].message 
        : 'Произошла ошибка'
    })
  }
}
