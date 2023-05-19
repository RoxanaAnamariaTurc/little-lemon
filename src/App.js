import Nav from './components/Nav';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import About from './components/About';
import Menu from './components/Menu';
import { useState } from 'react';


function App()
{

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () =>
  {
    if (!email || !password)
    {
      alert('Please enter both email and password');
      return;
    }
    alert('Login successful!')
    setIsLoggedIn(true);
    setUserName(email);

    setEmail('');
    setPassword('');
  }

  const handleLogout = () =>
  {
    setIsLoggedIn(false);
    setUserName('');
  }

  //TODO: lift state up from Reservation component to App component and pass it down in props
  //TODO: Create the About, Menu , Order Online and Login components
  //TODO: create the times available in the Reservation component as small buttons that shows times available based on the date selected


  return (
    <Router>
      <div className='App'>
        <Nav isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/login" element={<Login
            onLogin={handleLogin}
            isLoggedIn={isLoggedIn}
            username={username}
            onLogout={handleLogout}
            setEmail={setEmail}
            setPassword={setPassword}
            email={email}
            password={password} />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
