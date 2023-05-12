import { useState } from 'react'
import './App.css'
import Tateti from './components/Tateti'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Tateti/>
   </>
  )
}

export default App
