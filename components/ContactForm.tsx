import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { trackEvent } from '@/utils/analytics'
import { validateEmail, validatePhone, formatPhone } from '@/utils/validation'

interface FormData {
  email: string
  phone: string
  agreement: boolean
}

interface ContactFormProps {
  source: string
}

export default function ContactForm({ source }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setError
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          phone: formatPhone(data.phone),
          source,
          domain: window.location.hostname,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        trackEvent('form_submitted', { source })
      } else {
        setError('email', { message: result.message })
      }
    } catch (error) {
      console.error('Form error:', error)
      setError('email', { message: 'Произошла ошибка. Попробуйте позже.' })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-8 bg-gray-900 rounded-lg">
        <div className="text-4xl mb-4">✨</div>
        <h3 className="text-2xl font-bold mb-2">Спасибо!</h3>
        <p className="text-gray-400">Вы в списке ожидания. Мы сообщим о старте продаж!</p>
      </div>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email обязателен',
                validate: (value) => validateEmail(value) || 'Неверный формат email'
              })}
              type="email"
              className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-accent focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Телефон
            </label>
            <input
              {...register('phone', {
                required: 'Телефон обязателен',
                validate: (value) => validatePhone(value) || 'Неверный формат телефона'
              })}
              type="tel"
              className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-accent focus:outline-none transition-colors"
              placeholder="+7 (999) 999-99-99"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              {...register('agreement', {
                required: 'Необходимо согласие'
              })}
              type="checkbox"
              className="mt-1 mr-3 w-4 h-4 text-accent bg-gray-900 border-gray-700 rounded focus:ring-accent"
            />
            <label className="text-sm text-gray-400">
              Я согласен на обработку персональных данных в соответствии с{' '}
              <a href="/privacy" className="text-accent hover:underline">
                политикой конфиденциальности
              </a>
            </label>
          </div>
          {errors.agreement && (
            <p className="mt-1 text-sm text-red-500">{errors.agreement.message}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-accent text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Отправка...' : 'Узнать о старте продаж'}
          </button>
        </form>
      </div>
    </section>
  )
}
