import { ReactNode } from 'react'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>{children}</main>
      
      <footer className="mt-20 border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors">
              О бренде
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Контакты
            </Link>
            <Link href="/feedback" className="hover:text-white transition-colors">
              Обратная связь
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
          <div className="text-center mt-6 text-xs text-gray-600">
            © 2024 Premium Tech. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}
