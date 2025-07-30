import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { event, data, domain } = req.body
    const userAgent = req.headers['user-agent'] || ''
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || ''

    await prisma.analytics.create({
      data: {
        event,
        data,
        domain,
        userAgent,
        ip: ip.toString(),
      },
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Analytics error:', error)
    res.status(500).json({ success: false })
  }
}
