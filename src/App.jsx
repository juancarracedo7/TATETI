import { useState } from 'react'
import './App.css'
import Tateti from './components/Tateti'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1>Contador: {count}</h1>
   <h1>Juancito Docker</h1>
   <Tateti/>
   </>
  )
}

export default App
