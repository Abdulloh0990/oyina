import React from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from './components/Intro/Intro'
import Kun from './components/kun/Kun'
import Jamoa from './components/Jamoa/Jamoa'
import Tash from './components/tash/Tash'
import POrtfolio from './components/portfolio/POrtfolio'
import Sharhlar from './components/sharhlar/Sharhlar'
import FAQ from './components/faq/FAQ'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Kun/>
      <Jamoa/>
      <Tash/>
      <POrtfolio/>
      <Sharhlar/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
