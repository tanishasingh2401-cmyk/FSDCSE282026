import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'

function App() {
 

  return (
    <div>
      <h1>Welcome to React Vite</h1>
      <ICardGallery />
    </div>
    
     
  )
}
export default App
