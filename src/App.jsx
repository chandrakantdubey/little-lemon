import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/js/index.esm'

import './App.css'

import Layout from './components/Layout'
import Home from './components/Home'
import Reservations from './reservations/Reservations'
import Login from './components/Login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='reservations' element={<Reservations />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
