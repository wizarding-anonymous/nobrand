interface Product {
  id: string
  name: string
  category: string
  image: string
}

const products: Product[] = [
  { id: '1', name: 'Чайник KLF03', category: 'Чайники', image: '/images/products/kettle-1.jpg' },
  { id: '2', name: 'Тостер TSF01', category: 'Тостеры', image: '/images/products/toaster-1.jpg' },
  { id: '3', name: 'Блендер BLF01', category: 'Блендеры', image: '/images/products/blender-1.jpg' },
  { id: '4', name: 'Кофемашина ECF01', category: 'Кофемашины', image: '/images/products/coffee-1.jpg' },
  { id: '5', name: 'Соковыжималка CJF01', category: 'Соковыжималки', image: '/images/products/juicer-1.jpg' },
  { id: '6', name: 'Миксер SMF02', category: 'Миксеры', image: '/images/products/mixer-1.jpg' },
]

export default function ProductCatalog() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Каталог техники
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-accent mb-1">{product.category}</p>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-400 mt-2">Скоро в продаже</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
