import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Multimedia from './pages/Multimedia'
import Personal from './pages/Personal'
import CaseStudy from './pages/CaseStudy'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="multimedia" element={<Multimedia />} />
          <Route path="personal" element={<Personal />} />
          <Route path="work" element={<Navigate to="/multimedia" replace />} />
          <Route path="work/:slug" element={<CaseStudy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
