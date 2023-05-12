import Nav from './components/Nav';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import About from './components/About';
import Menu from './components/Menu';

function App()
{
  return (
    <Router>
      <div className='App'>
        <Nav />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
