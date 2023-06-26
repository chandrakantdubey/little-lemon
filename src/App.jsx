import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Homepage from './components/Homepage'
import BookingPage from './components/BookingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/booking' element={<BookingPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
