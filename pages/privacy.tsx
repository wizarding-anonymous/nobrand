import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Политика конфиденциальности | Premium Tech"
        description="Политика конфиденциальности Premium Tech. Защита ваших персональных данных."
      />
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
          Политика конфиденциальности
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
            <p className="text-gray-300">
              Настоящая политика конфиденциальности определяет порядок обработки 
              и защиты персональных данных пользователей сайта Premium Tech.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Сбор информации</h2>
            <p className="text-gray-300">
              Мы собираем следующую информацию:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Имя и контактная информация (email, телефон)</li>
              <li>Данные о посещениях сайта</li>
              <li>Информация об устройстве и браузере</li>
              <li>IP-адрес</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Использование информации</h2>
            <p className="text-gray-300">
              Собранная информация используется для:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Обработки заявок и обратной связи</li>
              <li>Информирования о новых продуктах и акциях</li>
              <li>Улучшения качества обслуживания</li>
              <li>Анализа эффективности маркетинговых кампаний</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Защита данных</h2>
            <p className="text-gray-300">
              Мы применяем современные методы защиты данных, включая:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Шифрование передаваемых данных (SSL)</li>
              <li>Ограничение доступа к персональным данным</li>
              <li>Регулярное обновление систем безопасности</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Права пользователей</h2>
            <p className="text-gray-300">
              Вы имеете право:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Запросить доступ к своим персональным данным</li>
              <li>Потребовать исправления неточных данных</li>
              <li>Отозвать согласие на обработку данных</li>
              <li>Удалить свои персональные данные</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Файлы cookie</h2>
            <p className="text-gray-300">
              Мы используем файлы cookie для улучшения работы сайта. 
              Вы можете отключить cookie в настройках браузера, но это может 
              повлиять на функциональность сайта.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Контакты</h2>
            <p className="text-gray-300">
              По вопросам политики конфиденциальности обращайтесь:<br />
              Email: privacy@premium-tech.ru<br />
              Телефон: +7 (495) 123-45-67
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500 mt-12">
              Последнее обновление: 1 января 2024 года
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}
