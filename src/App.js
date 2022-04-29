import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/Login/RequireAuth/RequireAuth';
import Register from './Pages/Login/Register/Register';
import ManageServices from './Pages/ManageServices/ManageServices';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ServiceDetail from './Pages/Shared/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/service/:serviceID" element={<ServiceDetail />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/addService' element={
          <RequireAuth>
            <AddService />
          </RequireAuth>
        } />
        <Route path='/manage' element={
          <RequireAuth>
            <ManageServices />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
