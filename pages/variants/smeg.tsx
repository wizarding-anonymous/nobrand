import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import CoverBlock from '@/components/CoverBlock'
import Timer from '@/components/Timer'
import ContactForm from '@/components/ContactForm'
import ShareButton from '@/components/ShareButton'
import ProductCatalog from '@/components/ProductCatalog'

export default function SmegVariant() {
  return (
    <Layout>
      <SEO
        title="Премиальная альтернатива Smeg | Скоро в России"
        description="Достойная альтернатива Smeg. Премиальная техника с итальянским дизайном по доступной цене. Качество без компромиссов."
      />
      
      <CoverBlock
        subtitle="Премиальное качество. Доступная роскошь. Альтернатива Smeg."
      />
      
      <Timer />
      
      <ContactForm source="smeg" />
      
      <ShareButton />
      
      <ProductCatalog />
    </Layout>
  )
}
