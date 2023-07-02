import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import '../node_modules/bootstrap/js/index.esm'

import Homepage from './components/Homepage'
import BookingPage from './components/BookingPage'
import ConfirmedBooking from './components/ConfirmedBooking'
import Layout from './components/Layout'
import About from './components/About'
import MenuCard from './components/MenuCard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<About />}/>
          <Route path='menu' element={<MenuCard />}/>
          <Route path='reservations' element={<BookingPage />}/>
          <Route path='confirmed' element={<ConfirmedBooking />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
