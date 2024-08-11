
import Header from './components/Header'
import IndexPage from './pages/IndexPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
        {/* HEADER */}
        <Header />
        <Routes>
          <Route path='/' element={<IndexPage />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='*' element={<NotFound />} ></Route>
        </Routes>

        {/* FOOTER */}
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
