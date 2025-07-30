import { useEffect } from 'react'
import { useRouter } from 'next/router'

const domainRoutes: Record<string, string> = {
  'tehnika-design.ru': '/variants/design',
  'tehnika-creator.ru': '/variants/creators',
  'tehnika-gift.ru': '/variants/gift',
  'tehnika-smeg.ru': '/variants/smeg',
}

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const hostname = window.location.hostname
    const route = domainRoutes[hostname] || '/variants/design'
    router.push(route)
  }, [router])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-pulse text-white">Загрузка...</div>
    </div>
  )
}
