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

  //TODO: lift state up from Reservation component to App component and pass it down in props
  //TODO: Create the About, Menu , Order Online and Login components
  //TODO: create the times available in the Reservation component as small buttons that shows times available based on the date selected


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
