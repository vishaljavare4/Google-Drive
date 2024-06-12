import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
// import Home from './Components/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home /> */}
    <Header />
    <div className='App'>
      <Sidebar />
    </div>
</>
  )
}

export default App
