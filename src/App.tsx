import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SiteProvider } from './SiteContext'
import { site } from './data/site'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Order from './pages/Order'
import About from './pages/About'

export default function App() {
  // Aplica o tema do cliente como variáveis CSS
  useEffect(() => {
    const t = site.theme
    const root = document.documentElement.style
    root.setProperty('--primary', t.primary)
    root.setProperty('--primary-dark', t.primaryDark)
    root.setProperty('--bg', t.background)
    root.setProperty('--surface', t.surface)
    root.setProperty('--text', t.text)
    root.setProperty('--muted', t.muted)
    root.setProperty('--font-heading', t.fontHeading)
    root.setProperty('--font-body', t.fontBody)
  }, [])

  return (
    <SiteProvider value={site}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Products />} />
          <Route path="encomendas" element={<Order />} />
          <Route path="sobre-nos" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </SiteProvider>
  )
}
