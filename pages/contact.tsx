import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Контакты | Premium Tech"
        description="Свяжитесь с нами. Premium Tech - премиальная бытовая техника."
      />
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
          Контакты
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Головной офис</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Адрес:</strong><br />
                Москва, ул. Примерная, д. 1<br />
                Бизнес-центр "Премиум"
              </p>
              <p>
                <strong className="text-white">Телефон:</strong><br />
                <a href="tel:+74951234567" className="hover:text-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                <a href="mailto:info@premium-tech.ru" className="hover:text-accent transition-colors">
                  info@premium-tech.ru
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Служба поддержки</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Телефон:</strong><br />
                <a href="tel:+78001234567" className="hover:text-accent transition-colors">
                  8 (800) 123-45-67
                </a><br />
                <span className="text-sm">Звонок по России бесплатный</span>
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                <a href="mailto:support@premium-tech.ru" className="hover:text-accent transition-colors">
                  support@premium-tech.ru
                </a>
              </p>
              <p>
                <strong className="text-white">Часы работы:</strong><br />
                Пн-Пт: 9:00 - 18:00<br />
                Сб-Вс: выходной
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Социальные сети</h2>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.344 16.163h-1.867c-1.055 0-1.232-.601-2.102-1.469-.785-.785-1.22-.183-1.202.935.006.297-.141.534-.495.534-1.105 0-2.694.156-4.304-1.58C6.656 12.724 5.5 10.1 5.5 10.1s-.135-.346.006-.479c.165-.154.54-.136.54-.136l2.013.012c.278.018.468.178.561.396.202.47.742 1.87.742 1.87.611 1.204 1.084 1.631 1.672 1.152.122-.097.19-.482.088-1.883-.136-1.872-.214-2.058-.754-2.288-.176-.076-.258-.288-.06-.336.658-.158 1.503.002 1.916.156.728.271.582.974.582 2.873 0 .608-.035 1.464.347 1.777.193.159.696.024 1.934-1.883 0 0 .549-1.014.826-1.678.105-.253.305-.429.569-.445l2.121-.012c.597-.007.798.206.666.534-.236.592-2.207 3.847-2.207 3.847-.366.622-.26.893.156 1.339.769.805 1.863 1.827 2.138 2.382.158.32-.002.552-.377.552z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
