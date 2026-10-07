import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import ICardGallery from './components/ICardGallery'
// import StateHandling from './components/StateHandling'
// import BgColor from './components/bgColor'
import ReactUseEffect from './components/ReactUseEffect'
import './App.css'
import Products from './components/Products'

function App() {
  return (
    <div>
      {/* <h1>Welcome to React Vite</h1>
      <ICardGallery /> */}
      <ReactUseEffect/>
      {/* <StateHandling /> */}
      {/* <BgColor /> */}
      <Products/>
    </div>
  )
}

export default App