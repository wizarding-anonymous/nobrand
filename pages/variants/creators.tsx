import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import CoverBlock from '@/components/CoverBlock'
import Timer from '@/components/Timer'
import ContactForm from '@/components/ContactForm'
import ShareButton from '@/components/ShareButton'
import ProductCatalog from '@/components/ProductCatalog'

export default function CreatorsVariant() {
  return (
    <Layout>
      <SEO
        title="Премиальная техника для контент-креаторов | Скоро в России"
        description="Стильная техника для создания контента. Идеальный фон для ваших фото и видео. Функциональность встречается с эстетикой."
      />
      
      <CoverBlock
        subtitle="Техника, которая станет звездой вашего контента"
      />
      
      <Timer />
      
      <ContactForm source="creators" />
      
      <ShareButton />
      
      <ProductCatalog />
    </Layout>
  )
}
