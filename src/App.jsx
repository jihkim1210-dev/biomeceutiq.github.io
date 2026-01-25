import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Products from './pages/Products'
import Support from './pages/Support'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="brand" element={<Brand />} />
        <Route path="products" element={<Products />} />
        <Route path="support" element={<Support />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App
