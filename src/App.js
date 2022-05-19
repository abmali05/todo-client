import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import SignUp from './Pages/Login/SignUp/SignUp';
import SignIn from './Pages/Login/SignIn/SignIn';
import ManageItems from './Pages/Home/ManageInventories/ManageInventories';
import AddProduct from './Pages/AddProduct/AddProduct';
import Auth from './Pages/Login/Auth/Auth';
import { useEffect } from 'react';


const loader = document.querySelector(".preloader");

const showLoader = () => loader.classList.remove("preloader");
const addClass = () => loader.classList.add("loader-hide");

function App() {


  useEffect(() => {
    showLoader();
    addClass();
  }, []);

  return (

    <div className='page-container'>
      <div className='content-wrap'>

        <Header></Header>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>

          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>




          <Route path='/manageinventories' element={
            <Auth>
              <ManageItems></ManageItems>
            </Auth>

          }></Route>
          <Route path='/addproduct' element={
            <Auth>
              <AddProduct></AddProduct>
            </Auth>

          }></Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>

        </Routes>
      </div>
      <Footer></Footer>

    </div>

  );
};


export default App;
