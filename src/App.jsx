import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Homepage from './components/Homepage'
import BookingPage from './components/BookingPage'
import ConfirmedBooking from './components/ConfirmedBooking'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/booking' element={<BookingPage />}/>
        <Route path='/confirmed' element={<ConfirmedBooking />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
