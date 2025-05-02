import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextEditor from './Components/TextEditor/TextEditor'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Pitch from './Components/Pitch/Pitch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero/>
      <Pitch/>
    </>
  )
}

export default App
