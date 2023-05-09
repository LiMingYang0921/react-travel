import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, SignIn, Register, Detail } from './pages'
import axios from 'axios'

axios.defaults.headers['x-icode'] = '37DE453909E2E209'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:touristRouteId" element={<Detail />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
