import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

export default function About() {
  return (
    <Layout>
      <SEO
        title="О бренде | Premium Tech"
        description="История бренда Premium Tech. Итальянское качество и инновационные технологии в каждой детали."
      />
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
          История бренда
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Premium Tech — это синтез итальянского дизайна и передовых технологий, 
            воплощенный в премиальной бытовой технике для вашей кухни.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">Наша философия</h2>
          <p className="text-gray-300">
            Мы верим, что бытовая техника должна быть не только функциональной, 
            но и вдохновляющей. Каждое изделие — это произведение искусства, 
            которое преображает пространство вашей кухни.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">Качество без компромиссов</h2>
          <p className="text-gray-300">
            Используя только лучшие материалы и компоненты, мы создаем технику, 
            которая служит десятилетиями, сохраняя первозданный вид и функциональность.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">Инновации</h2>
          <p className="text-gray-300">
            Наша команда инженеров постоянно работает над внедрением новейших 
            технологий, делая использование техники максимально комфортным и эффективным.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">Дизайн</h2>
          <p className="text-gray-300">
            Сотрудничество с ведущими итальянскими дизайнерами позволяет нам 
            создавать технику, которая становится центральным элементом интерьера.
          </p>
        </div>
      </div>
    </Layout>
  )
}
