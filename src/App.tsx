import React from 'react';
import styles from "./App.module.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, Register, Detail } from './pages'

function App() {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/detail/:touristRouteId' element={<Detail />}></Route>
          <Route path='*' element={<h1>页面去火星了</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
