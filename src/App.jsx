// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="spline-container">
    <Spline scene="https://prod.spline.design/ooP6ntpyB1b2OOyn/scene.splinecode" />
  </div>
  )
}

export default App
