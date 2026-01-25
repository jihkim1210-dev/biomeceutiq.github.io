import { useState } from 'react'
import probioticsImage from '/Users/jihyeon/Documents/trae_projects/Biomeceutiq_webpage/src/assets/ildong.jpeg'

const products = [
  {
    id: 1,
    name: '약산성 젤투폼 클렌저',
    category: 'Skin Care',
    subcategory: 'Cleanser',
    price: '28,000 KRW',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    description: 'Gentle low-pH gel-to-foam cleanser for sensitive skin.'
  },
  {
    id: 2,
    name: '톤업 재생 크림',
    category: 'Skin Care',
    subcategory: 'Basic',
    price: '28,000 KRW',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    description: 'Tone-up regeneration cream for radiant skin.'
  },
  {
    id: 3,
    name: '브로멜라인 퀘르세틴 정',
    category: 'Health Care',
    subcategory: 'Supplements',
    price: '34,000 KRW',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    description: 'Bromelain & Quercetin supplement for inflammation support.'
  },
  {
    id: 4,
    name: '리포좀 글루타치온',
    category: 'Health Care',
    subcategory: 'Supplements',
    price: '21,900 KRW',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
    description: 'Liposomal Glutathione for superior absorption and antioxidant support.'
  },
  {
    id: 5,
    name: 'NMN',
    category: 'Health Care',
    subcategory: 'Supplements',
    price: '36,000 KRW',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=800',
    description: 'Nicotinamide Mononucleotide for cellular energy and anti-aging.'
  },
  {
    id: 6,
    name: '일동생활건강 생유산균 100억 낙산균 포스트바이오틱스',
    category: 'Health Care',
    subcategory: 'Pre/Pro/Post-biotics',
    price: '30,000 KRW',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800',
    description: '10 Billion probiotics with Postbiotics for gut health.'
  }
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-gray-50 py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-gray-900 tracking-widest mb-4">PRODUCTS</h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Discover our scientifically formulated solutions for your skin and health.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex justify-center mb-16 space-x-8 overflow-x-auto pb-4 sm:pb-0">
          {['All', 'Skin Care', 'Health Care'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-medium tracking-widest pb-2 border-b-2 transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100 mb-4 md:mb-6 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="space-y-2 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest">{product.subcategory}</p>
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 px-4">{product.description}</p>
                <p className="text-sm font-bold text-gray-900 mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
