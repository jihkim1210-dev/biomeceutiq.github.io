import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/website_logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'BRAND', path: '/brand' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'SUPPORT', path: '/support' },
  ]

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false
    return location.pathname === path
  }

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="BIOMECEUTIQ" className="h-8 md:h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium tracking-widest transition-colors duration-200 ${
                  isActive(item.path) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="text-gray-500 hover:text-gray-900 transition-colors">
              <User size={22} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                   isActive(item.path) ? 'text-gray-900 bg-gray-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
             <Link
                to="/login"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                LOGIN
              </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
