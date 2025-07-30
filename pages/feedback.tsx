import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import { trackEvent } from '@/utils/analytics'

interface FeedbackData {
  name: string
  email: string
  message: string
}

export default function Feedback() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<FeedbackData>()

  const onSubmit = async (data: FeedbackData) => {
    setIsLoading(true)
    
    // Здесь можно добавить отправку на сервер
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    trackEvent('feedback_submitted')
    setIsLoading(false)
  }

  return (
    <Layout>
      <SEO
        title="Обратная связь | Premium Tech"
        description="Оставьте отзыв или задайте вопрос. Мы ценим ваше мнение."
      />
      
      <div className="container mx-auto px-4 py-20 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
          Обратная связь
        </h1>
        
        {isSubmitted ? (
          <div className="text-center py-12 px-8 bg-gray-900 rounded-lg">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-2">Спасибо за обращение!</h3>
            <p className="text-gray-400">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Имя
              </label>
              <input
                {...register('name', {
                  required: 'Имя обязательно'
                })}
                type="text"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-accent focus:outline-none transition-colors"
                placeholder="Ваше имя"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'Email обязателен',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Неверный формат email'
                  }
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
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Сообщение
              </label>
              <textarea
                {...register('message', {
                  required: 'Сообщение обязательно',
                  minLength: {
                    value: 10,
                    message: 'Минимум 10 символов'
                  }
                })}
                rows={5}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Ваш вопрос или отзыв"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-accent text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Отправка...' : 'Отправить'}
            </button>
          </form>
        )}
      </div>
    </Layout>
  )
}
