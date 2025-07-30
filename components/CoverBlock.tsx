import { useEffect, useState } from 'react'

interface CoverBlockProps {
  title?: string
  subtitle: string
}

export default function CoverBlock({ 
  title = "Скоро в России", 
  subtitle 
}: CoverBlockProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновые силуэты */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/kettle-silhouette.png"
          alt=""
          className={`absolute top-10 left-10 w-64 h-64 product-silhouette transform -rotate-12 transition-all duration-1000 ${
            isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        />
        <img
          src="/images/toaster-silhouette.png"
          alt=""
          className={`absolute bottom-10 right-10 w-72 h-72 product-silhouette transform rotate-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        />
        <img
          src="/images/blender-silhouette.png"
          alt=""
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 product-silhouette transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-60 scale-100' : 'opacity-0 scale-90'
          }`}
        />
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center px-4">
        <h1 className={`text-6xl md:text-8xl font-bold mb-4 gradient-text transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        }`}>
          {title}
        </h1>
        <p className={`text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          {subtitle}
        </p>
      </div>

      {/* Градиент внизу */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
