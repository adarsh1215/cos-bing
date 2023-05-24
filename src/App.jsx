import './App.css'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './home/HomePage.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </>
  )
}

export default App
