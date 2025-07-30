import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
}

export default function SEO({ title, description, image, url }: SEOProps) {
  const domain = typeof window !== 'undefined' ? window.location.origin : ''
  const fullUrl = url || domain
  const fullImage = image || `${domain}/og-image.jpg`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
