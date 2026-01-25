export default function Support() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-gray-900 tracking-widest mb-4">SUPPORT</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We are here to help. Send us a message or chat with us directly.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase mb-2">Name</label>
                <input type="text" id="name" className="block w-full border-gray-200 rounded-none shadow-sm p-3 border focus:ring-0 focus:border-gray-900 transition-colors bg-gray-50" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
                <input type="email" id="email" className="block w-full border-gray-200 rounded-none shadow-sm p-3 border focus:ring-0 focus:border-gray-900 transition-colors bg-gray-50" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase mb-2">Message</label>
                <textarea id="message" rows={4} className="block w-full border-gray-200 rounded-none shadow-sm p-3 border focus:ring-0 focus:border-gray-900 transition-colors bg-gray-50" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-900 text-white py-4 px-4 hover:bg-gray-800 transition-colors tracking-widest text-sm font-bold uppercase">
                Send Message
              </button>
            </form>
          </div>

          {/* Kakao Link */}
          <div className="flex flex-col justify-center items-center text-center p-8 bg-gray-50 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need immediate assistance?</h3>
            <p className="text-gray-500 mb-8">
              Connect with us on KakaoTalk for real-time support regarding products, orders, and skincare advice.
            </p>
            <a 
              href="http://pf.kakao.com/_GxaURG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FEE500] text-[#191919] px-8 py-4 rounded-md font-bold hover:bg-[#FDD835] transition-colors w-full shadow-sm"
            >
              Chat on KakaoTalk Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
