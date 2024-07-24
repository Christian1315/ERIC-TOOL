
import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import IndexPage from './pages/IndexPage'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      {/* HEADER */}
      <Header />

      <Router>
        <Routes>
          <Route path='/' element={<IndexPage />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='*' element={<NotFound/>} ></Route>
        </Routes>
      </Router>

      <IndexPage />

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default App
