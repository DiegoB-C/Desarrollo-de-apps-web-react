import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  return (
    <>
      <section id="center">

        <div>
          <h1>HOLA MUNDO</h1>
          <p>
            ESTOY APRENDIENDO REACT
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onMouseEnter={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

    </>
  )
}

export default App
