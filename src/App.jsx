import './App.css'
import { Navbar, CTA, Brand, Feature, Article } from './components'
import { Header, Blog, Features, Footer, Possibility, WhatGPT3 } from './containers'

function App() {


  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
