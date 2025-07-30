import { useState } from 'react'
import { trackEvent } from '@/utils/analytics'

export default function ShareButton() {
  const [isCopied, setIsCopied] = useState(false)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = 'Премиальная техника скоро в России!'

  const handleShare = (platform: string) => {
    trackEvent('share_clicked', { platform })

    switch (platform) {
      case 'telegram':
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
          '_blank'
        )
        break
      case 'vk':
        window.open(
          `https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
          '_blank'
        )
        break
      case 'copy':
        navigator.clipboard.writeText(shareUrl).then(() => {
          setIsCopied(true)
          setTimeout(() => setIsCopied(false), 2000)
        })
        break
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">Поделиться с друзьями</h2>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleShare('telegram')}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
            Telegram
          </button>
          
          <button
            onClick={() => handleShare('vk')}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.344 16.163h-1.867c-1.055 0-1.232-.601-2.102-1.469-.785-.785-1.22-.183-1.202.935.006.297-.141.534-.495.534-1.105 0-2.694.156-4.304-1.58C6.656 12.724 5.5 10.1 5.5 10.1s-.135-.346.006-.479c.165-.154.54-.136.54-.136l2.013.012c.278.018.468.178.561.396.202.47.742 1.87.742 1.87.611 1.204 1.084 1.631 1.672 1.152.122-.097.19-.482.088-1.883-.136-1.872-.214-2.058-.754-2.288-.176-.076-.258-.288-.06-.336.658-.158 1.503.002 1.916.156.728.271.582.974.582 2.873 0 .608-.035 1.464.347 1.777.193.159.696.024 1.934-1.883 0 0 .549-1.014.826-1.678.105-.253.305-.429.569-.445l2.121-.012c.597-.007.798.206.666.534-.236.592-2.207 3.847-2.207 3.847-.366.622-.26.893.156 1.339.769.805 1.863 1.827 2.138 2.382.158.32-.002.552-.377.552z"/>
            </svg>
            VK
          </button>
          
          <button
            onClick={() => handleShare('copy')}
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {isCopied ? 'Скопировано!' : 'Копировать'}
          </button>
        </div>
      </div>
    </section>
  )
}
