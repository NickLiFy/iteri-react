import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from './layout/Header.tsx'
import { Hero } from './featuers/Hero.tsx'
import { About } from './featuers/About.tsx'
import { References } from './featuers/References.tsx'
import { Services } from './featuers/Services.tsx'
import { Projects } from './featuers/Projects.tsx'
import { Contact } from './featuers/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Header />
    <Hero />
    <About />
    <References />
    <Services />
    <Projects />
    <Contact />
  </StrictMode>,
)
