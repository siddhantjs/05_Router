import { useState } from 'react'
import {Routes,Route} from 'react-router';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Components/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home /> } />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
