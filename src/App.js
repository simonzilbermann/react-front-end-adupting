
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Recover from './components/Recover';
import Reset from './components/Reset';
import Homepage from './components/Homepage';
import Negishot from './components/Negishot';
import Info from './components/Info';
import About from './components/About';
import Error404 from './components/Error404';
import Cprofile from './components/Cprofile';
import Profile from './components/Profile';
import Confirm from './components/Confirm';
import ConfirmUser from './components/ConfirmUser';
import WM from './components/Wm';
import LoginWm from './components/LoginWm';


import { BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={ <Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recover' element={<Recover />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/negishot' element={<Negishot />} />
        <Route path='/info' element={<Info />} />
        <Route path='/about' element={<About />} />
        <Route path='/cprofile' element={<Cprofile />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/confirm' element={<Confirm />} />
        <Route path='/wm' element={<WM />} />
        <Route path='/loginwm' element={<LoginWm />} />
        <Route path='/confirmuser/:confirmcode' element={<ConfirmUser />} />
  
        <Route path='*' element={<Error404 />} />
      </Routes>
        <Footer />
        </BrowserRouter>
       
    </div>
    


  );
}

export default App;
