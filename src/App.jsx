import { useState } from 'react'
import './App.css'
import Form from 'components./Form'
import Evento from './components/Evento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Atividade 05</h1>
      <Form />
      <Evento />
    </div>
  )
}

export default App
