import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50 h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000" 
            alt="Microbiome Science Lab" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 tracking-widest">
            BIOMECEUTIQ
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-10 font-light max-w-2xl mx-auto tracking-wide">
            A microbiome-based skin and health care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/products" className="inline-block bg-gray-900 text-white px-10 py-4 text-sm tracking-widest hover:bg-gray-800 transition-colors uppercase font-medium">
              Shop Now
            </Link>
            <Link to="/brand" className="inline-block border border-gray-900 text-gray-900 px-10 py-4 text-sm tracking-widest hover:bg-gray-900 hover:text-white transition-colors uppercase font-medium">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 tracking-widest">SCIENCE MEETS NATURE</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We focus on the delicate balance of your skin's microbiome to unlock true radiance and health. 
              Experience the synergy of biotechnology and natural ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/products" className="relative h-[500px] group overflow-hidden cursor-pointer block">
              <img 
                src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=1000" 
                alt="Microbiome Skin Care" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-3xl font-serif font-bold tracking-widest border-b-2 border-white/0 group-hover:border-white pb-2 transition-all duration-300">
                  SKIN CARE
                </span>
              </div>
            </Link>
            <Link to="/products" className="relative h-[500px] group overflow-hidden cursor-pointer block">
               <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000" 
                alt="Health Care" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-white text-3xl font-serif font-bold tracking-widest border-b-2 border-white/0 group-hover:border-white pb-2 transition-all duration-300">
                  HEALTH CARE
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
