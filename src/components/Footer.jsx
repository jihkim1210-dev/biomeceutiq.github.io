export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 tracking-widest">BIOMECEUTIQ</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Pioneering microbiome-based solutions for skin and health. 
              We believe in the power of science to restore your natural balance.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <a href="/support" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="/support" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Connect</h4>
             <a href="http://pf.kakao.com/_GxaURG" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-500 hover:text-gray-900 text-sm transition-colors">
              KakaoTalk Channel
            </a>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-gray-500 text-xs font-medium">
              대표자: 김지현
            </p>
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} BIOMECEUTIQ. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-xs">Privacy Policy</span>
            <span className="text-gray-400 text-xs">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
