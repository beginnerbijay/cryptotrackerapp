import 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Coin from './components/Coin'

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/coin/:id' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
