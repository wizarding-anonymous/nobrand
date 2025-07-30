import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import CoverBlock from '@/components/CoverBlock'
import Timer from '@/components/Timer'
import ContactForm from '@/components/ContactForm'
import ShareButton from '@/components/ShareButton'
import ProductCatalog from '@/components/ProductCatalog'

export default function DesignVariant() {
  return (
    <Layout>
      <SEO
        title="Премиальная техника для ценителей дизайна | Скоро в России"
        description="Эксклюзивная коллекция бытовой техники с безупречным дизайном. Итальянский стиль и инновационные технологии для вашей кухни."
      />
      
      <CoverBlock
        subtitle="Итальянский дизайн и безупречное качество для вашего интерьера"
      />
      
      <Timer />
      
      <ContactForm source="design" />
      
      <ShareButton />
      
      <ProductCatalog />
    </Layout>
  )
}
