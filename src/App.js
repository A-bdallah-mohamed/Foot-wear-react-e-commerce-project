import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import data from './data';
import logoo from './sneakers-logos_black.PNG';
import { FaSearch } from 'react-icons/fa'; //install react icons (npm install react-icons) 
import { CgProfile } from "react-icons/cg"; // search icon is "<FaSearch />"
import { FiShoppingCart } from "react-icons/fi";
import nikelogo from "./nikelogo.jpg";
import pumalogo from "./pumalogo.jpg";
import vanslogo from "./vanslogo.jpg";
import adidaslogo from "./adidaslogo.jpg";
import mainbanner from "./wallpaper1.png"
import { IoMdArrowDroprightCircle } from "react-icons/io";
import sandalsbanner from "./sandals.jpg"
import heelsbanner from "./heels.jpg"
import sneakersbanner from "./sneakers.jpg"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { ImLoop2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import Product  from './product';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes , HashRouter} from 'react-router-dom';
import Categorypage from './categorypage';
import { useLocation } from 'react-router-dom';
import Main from './main';
import Profilepage from './profilepage'
import Cartpage from './cartpage'




function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, [pathname]);
  
    return null; 
  }

  
 const [clickedproduct, setclickedproduct] = useState(null);
 
  return (
<HashRouter>
<ScrollToTop />
<Routes>
  <Route index element={<Main setclickedproduct={setclickedproduct} /> } />

<Route path="/product/:id" element={<Product clickedproduct={clickedproduct} />} />

<Route path='/categorypage/:id' element={<Categorypage />} />

<Route path='/profilepage' element={<Profilepage />} />

<Route path='/Cartpage' element={<Cartpage />} />
</Routes>
</HashRouter>
  );
}

export default App;
