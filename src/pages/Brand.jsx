export default function Brand() {
  return (
    <div className="bg-white">
      <div className="relative py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900 tracking-widest mb-6">OUR PHILOSOPHY</h1>
            <div className="w-16 h-1 bg-gray-900 mx-auto"></div>
         </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&q=80&w=1000" 
              alt="Brand Philosophy" 
              className="w-full h-auto shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-wide">A Microbiome-Based Approach</h2>
            <div className="space-y-6 text-gray-500 leading-loose">
              <p>
                At <span className="text-gray-900 font-medium">BIOMECEUTIQ</span>, we believe that true beauty and health start from within. Our research focuses on the intricate ecosystem of microorganisms that live on and inside our bodies.
              </p>
              <p>
                By understanding and supporting this microbiome, we create products that not only address symptoms but restore the natural balance required for lasting health and radiance.
              </p>
              <p>
                Our formulation philosophy combines cutting-edge biotechnology with the purest natural ingredients to deliver safe, effective, and sustainable solutions for your skin and body.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
