
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Detail from './pages/Detail.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Update from './pages/Update.jsx';
import Create from './pages/Create.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/create' element={<Create />} />
          <Route path='/dashboard/update/:id' element={<Update />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
