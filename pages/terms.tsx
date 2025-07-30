import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Пользовательское соглашение | Premium Tech"
        description="Условия использования сайта Premium Tech."
      />
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
          Пользовательское соглашение
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Общие условия</h2>
            <p className="text-gray-300">
              Используя сайт Premium Tech, вы соглашаетесь с условиями настоящего 
              пользовательского соглашения. Если вы не согласны с условиями, 
              пожалуйста, не используйте наш сайт.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Использование сайта</h2>
            <p className="text-gray-300">
              Вы обязуетесь использовать сайт только в законных целях и способами, 
              которые не нарушают права третьих лиц.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Интеллектуальная собственность</h2>
            <p className="text-gray-300">
              Все материалы на сайте, включая тексты, изображения, логотипы и дизайн, 
              являются собственностью Premium Tech и защищены законом об авторском праве.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Ограничение ответственности</h2>
            <p className="text-gray-300">
              Premium Tech не несет ответственности за любые прямые или косвенные 
              убытки, возникшие в результате использования или невозможности 
              использования сайта.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Изменения в соглашении</h2>
            <p className="text-gray-300">
              Мы оставляем за собой право изменять условия настоящего соглашения. 
              Изменения вступают в силу с момента их публикации на сайте.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Применимое право</h2>
            <p className="text-gray-300">
              Настоящее соглашение регулируется законодательством Российской Федерации.
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500 mt-12">
              Дата вступления в силу: 1 января 2024 года
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}
