import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import CoverBlock from '@/components/CoverBlock'
import Timer from '@/components/Timer'
import ContactForm from '@/components/ContactForm'
import ShareButton from '@/components/ShareButton'
import ProductCatalog from '@/components/ProductCatalog'

export default function GiftVariant() {
  return (
    <Layout>
      <SEO
        title="Премиальная техника в подарок | Скоро в России"
        description="Роскошные подарки для особенных людей. Премиальная бытовая техника с итальянским дизайном и безупречным качеством."
      />
      
      <CoverBlock
        subtitle="Подарки, которые запомнятся навсегда"
      />
      
      <Timer />
      
      <ContactForm source="gift" />
      
      <ShareButton />
      
      <ProductCatalog />
    </Layout>
  )
}
