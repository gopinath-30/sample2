import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * App component
 * 
 * This is the main React component for the sample2 project.
 * It displays logos, a counter button, and instructions.
 * 
 * @component
 * @returns {JSX.Element} The rendered component
 */
function App() {
  /**
   * State variable for counter
   * @type {[number, function]}
   */
  const [count, setCount] = useState(0)

  /**
   * Increment the counter by 1
   */
  const increment = () => setCount(count + 1)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
