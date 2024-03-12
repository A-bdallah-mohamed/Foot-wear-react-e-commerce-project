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
import flatsbanner from "./flats.jpg"
import sneakersbanner from "./sneakers.jpg"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { ImLoop2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { LuFacebook, LuSquareStack } from "react-icons/lu";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";

import { Link, json , useParams} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';






data.forEach((item, index) => {
    console.log(`Title ${index + 1}: ${item.img}`);
  });
  function bestsellerproduct(){
    let bestsellerproductcount = 0;
    data.forEach((item) =>{
      if (item.bestseller === "true"){
        bestsellerproductcount++;
      }
    });
   console.log(bestsellerproductcount);
  }
function Product() {
const supremesneakers = {
  img: "https://i.ibb.co/7VdH0W2/pngwing-com.png",
  title: "Adidas Superstar Originals Shoe",
  bestseller: "true" ,
  reviews: "(268 reviews)",
  prevPrice: "$150,00",
  newPrice: "99",
  company: "Adidas",
  color: "white",
  category: "sneakers",
  size: '',
  count: 1,
}
    
  const [bestsellerproductcount, setbestsellerproductcount] = useState(0);
  const [bestsellers, setBestsellers] = useState([]);
  const [ishoverd , setishoverd] = useState(false);
  const [isclicked , setisclicked] = useState(false);
  const [scrollposition, setscrollposition] = useState(0);
  const scrollableref = useRef(null);
  const [isscrollopen, setisscrollopen ] =useState(true);
 const [ismenushow, setismenushow] = useState(false);
const [issearchscreenshow, setissearchscreenshow] = useState(false);
const [searchtext, setsearchtext] = useState('');
const [enteredseaches, setenteredseaches] = useState([]);
const [showclear ,setshowclear] = useState(false);
const [ismenucateshow, setismenucateshow] = useState(true);
const [selectedcategory, setselectedcategory] = useState(null);
const [issecondcategoryshow, setissecondcategoryshow] = useState(false);
const [clickedcategory , setclickedcategory] = useState(null);
const [istoggledropdown, setistoggledropdown] = useState(false)
const [clickedproduct, setclickedproduct] = useState(null);
const  [nikeproducts , setnikeproducts] = useState([]);



//cart functions ------------------------------------------------------------------------------------------------------------

const [cartitemslenght ,setcartitemslenght] = useState(0);

useEffect(() => {
const cartitemsarray = localStorage.getItem('cartitems');
const parsedCartItemssarray = JSON.parse(cartitemsarray || '[]');
const cartitemslenghtt = parsedCartItemssarray.length
setcartitemslenght(cartitemslenghtt)
console.log('lenght is : ' , cartitemslenght)
}, [cartitemslenght]); 


const [cartproducts, setcartproducts] = useState([]);
const [isproductaddedtocart,setisproductaddedtocart ] = useState(false);
const [sizemenushow ,setsizemenushow] = useState(false);
const [sizes , setsized] = useState([35,36,37,38,39,40,41,42,43,44,45])

const scrolltotop = () => {
  window.scrollTo({
    top: 0
});
}
  const showblackscreensize = () => {
    setsizemenushow(true)
    document.body.style.overflow = 'hidden';
  }
const unshowblackscreensize = () =>{
  setsizemenushow(false)
  document.body.style.overflow = 'auto';
}

const addproducttoccart = (product, sizevalue) => {
   
  const newproduct = product;
  const newsize = sizevalue;



setisproductaddedtocart(false)

  const cartItemsStringg = localStorage.getItem('cartitems')
  const parsedCartItemss = JSON.parse(cartItemsStringg || '[]');
  newproduct.size = newsize;
  console.log('newproduct is : ', newproduct)
  if(parsedCartItemss.length > 0){
  //                               (if parsed array from the local storage exist) do the following (existince of local storage array)
    if(!parsedCartItemss.some(item => item.title === newproduct.title) && !parsedCartItemss.some(item => item.size === newproduct.size)){
      //(if the new product title and size doesnt match with any existing product title and size (both)) do the following (existince of local storage array)
    const updatedCartProducts = [...parsedCartItemss, newproduct];
          //                              add the product to the array  (existince of local storage array)
  setcartproducts(updatedCartProducts)
   //                             display the array into the page  (existince of local storage array)
  localStorage.setItem('cartitems' ,JSON.stringify(updatedCartProducts))
   //                             update the local storage array  (existince of local storage array)
  setisproductaddedtocart(true)
  setTimeout(() => {
    setisproductaddedtocart(false)
  }, 1000);
  }
else {
   //        
   if(parsedCartItemss.some(item => item.title === newproduct.title) && !parsedCartItemss.some(item => item.size === newproduct.size)){
    const updatedCartProducts = [...parsedCartItemss, newproduct];
    setcartproducts(updatedCartProducts)
    localStorage.setItem('cartitems' ,JSON.stringify(updatedCartProducts))
   }             
  if(parsedCartItemss.some(item => item.title === newproduct.title) && parsedCartItemss.some(item => item.size === newproduct.size)){
       //    (existince of local storage array)  (if the new product title and size match with any existing product title and size (both)) do the following
    parsedCartItemss.forEach(item => {
      if(item.title === newproduct.title && item.size === newproduct.size){
      item.count += 1;
      }
        //    (existince of local storage array)       for each similar item in size and title increase its count by one
    })
    
setcartproducts(parsedCartItemss)
localStorage.setItem('cartitems' ,JSON.stringify(parsedCartItemss))
console.log('item count is : ' , newproduct.count)
setisproductaddedtocart(true)
  setTimeout(() => {
    setisproductaddedtocart(false)
  }, 1000);
  }
}
}
  else{   
    // if local storage is empty
    if(!cartproducts.some(item => item.title === newproduct.title) || !cartproducts.some(item => item.size === newproduct.size)){
      // (empty local storage)   (if the new product doesnt match title or size of an existing product)
    setcartproducts(prevcartproducts => [...prevcartproducts, newproduct]);
          // (empty local storage)   add item to the array 
    localStorage.setItem('cartitems' , JSON.stringify([...cartproducts,newproduct]))
      // (empty local storage)   add array to the local storage 
    setisproductaddedtocart(true)
  setTimeout(() => {
    setisproductaddedtocart(false)
  }, 1000);
    }
    else{
      if(cartproducts.some(item => item.title === newproduct.title  ) && cartproducts.some(item => item.size === newproduct.size)){
         // (empty local storage)   (if the new product  match title and size of an existing product)
        cartproducts.forEach(item => {
          item.count += 1;
          if(item.title === newproduct.title && item.size === newproduct.size){
          } 
        })
    setcartproducts(cartproducts)
    localStorage.setItem('cartitems' ,JSON.stringify(cartproducts))
    console.log('item count is : ' , newproduct.count)
    setisproductaddedtocart(true)
      setTimeout(() => {
        setisproductaddedtocart(false)
      }, 1000);
      }
    }
  }
  setTimeout(() => {
    window.location.reload(); 
  }, 1);
}
const removeitemfromcart = (item) => {
  const updatedcartitemss = cartproducts.filter(products => products !== item)
  setcartproducts(updatedcartitemss)

  if (updatedcartitemss.length === 0){
    localStorage.removeItem('cartitems');
  }

  else if(updatedcartitemss.length > 0){
    localStorage.setItem('cartitems' ,JSON.stringify(updatedcartitemss))
  }
}

// decrese test

const decreaseitemcount = (item) => {
  const newitem = item;
  const parsedcartitems = localStorage.getItem('cartitems')
  const parsedcartitemss = JSON.parse(parsedcartitems || '[]');
  const index = parsedcartitemss.findIndex(product => product.title === newitem.title && product.size === newitem.size);
  console.log("index is : ",index)
  if (index !== -1){
    parsedcartitemss[index].count -= 1;
    console.log('new item count is : ', newitem.count)
    setcartproducts(parsedcartitemss)
    localStorage.setItem('cartitems', JSON.stringify(parsedcartitemss));
    if(parsedcartitemss[index].count <= 0) {
      removeitemfromcart(item)
    }
  }



}

// decrese test
const [parsedcartproducts, setParsedCartProducts] = useState([]);

  const getItems = () => {
    const cartItemsString = localStorage.getItem('cartitems');
    const parsedCartItems = JSON.parse(cartItemsString || '[]'); 
    setParsedCartProducts(parsedCartItems);
  };

  useEffect(() => {
    console.log("cart products are : ", cartproducts);
  }, [cartproducts]); 




  const CARTITEMSS =localStorage.getItem('cartitems');
  useEffect(() => {

if(CARTITEMSS){
  console.log('data is : ', CARTITEMSS)
}
else {
  console.log('NO')
}
  },[CARTITEMSS])
  useEffect(() => {
    const gottenitems = localStorage.getItem('cartitems')
    const parsedCartItemss = JSON.parse(gottenitems || '[]');
      setcartproducts(parsedCartItemss)
  },[])


const emptycart = () => {
  setcartproducts([])
  localStorage.setItem('cartitems' , ([]))
}
//cart functions ------------------------------------------------------------------------------------------------------------








const param = useParams()

const setcompanynamenike = () => {
  localStorage.setItem('companycategory' , 'Nike')
}
const setcompanynameadidas = () => {
  localStorage.setItem('companycategory' , 'Adidas')
}
const setcompanynamepuma = () => {
  localStorage.setItem('companycategory' , 'Puma')
}
const setcompanynamevans = () => {
  localStorage.setItem('companycategory' , 'Vans')
}
const filternikeproducts = () => {
  const nikeproducts = JSON.stringify(data.filter(product => product.company === 'Nike'))
localStorage.setItem('categorypagecontent' , nikeproducts);
}
const filteradidasproducts = () => {
  const adidasproducts = JSON.stringify(data.filter(product => product.company === 'Adidas'))
localStorage.setItem('categorypagecontent' , adidasproducts);
}
const filtervansproducts = () => {
  const vansproducts = JSON.stringify(data.filter(product => product.company === 'Vans'))
localStorage.setItem('categorypagecontent' , vansproducts);
}
const filterpumaproducts = () => {
  const pumaproducts = JSON.stringify(data.filter(product => product.company === 'Puma'))
localStorage.setItem('categorypagecontent' , pumaproducts);
}













const setcategorynameheels = () => {
  localStorage.setItem('companycategory' , 'Heels')
}
const setcategorynameflats = () => {
  localStorage.setItem('companycategory' , 'Flats')
}
const setcategorynamesneakers = () => {
  localStorage.setItem('companycategory' , 'Sneakers')
}
const setcategorynamesandals = () => {
  localStorage.setItem('companycategory' , 'Sandals')
}
const filterheelsproducts = () => {
  const heelsproducts = JSON.stringify(data.filter(product => product.category === 'heels'))
localStorage.setItem('categorypagecontent' , heelsproducts);
}
const filterflatsproducts = () => {
  const flatsproducts = JSON.stringify(data.filter(product => product.category === 'flats'))
localStorage.setItem('categorypagecontent' , flatsproducts);
}
const filtersandalsproducts = () => {
  const sandalsproducts = JSON.stringify(data.filter(product => product.category === 'sandals'))
localStorage.setItem('categorypagecontent' , sandalsproducts);
}
const filtersneakersproducts = () => {
  const sneakersproducts = JSON.stringify(data.filter(product => product.category === 'sneakers'))
localStorage.setItem('categorypagecontent' , sneakersproducts);
}












const handleRefresh = () => {
  window.location.reload(); 
};
const selectedproduct = (product) => {
  setclickedproduct(product);
  localStorage.setItem('selectedProduct', JSON.stringify(product));
}
const selectedsupremesneakers = () => {
  localStorage.setItem('selectedProduct', JSON.stringify(supremesneakers))
}

const turnoffdropdown = () => {
  setistoggledropdown(false)
}
const toggledropdown = (company) => {
  setistoggledropdown(prevState => ({
    ...prevState,
    [company]: !prevState[company]
  }));
}

const selectedmap = data.filter(product => product.category === selectedcategory)
const filteredmap = (company) =>{ return selectedmap.filter(product => product.company === company)}
const uniqueCompanies = [...new Set(selectedmap.map(product => product.company))];
const untogglesecondmenu = () => {
  setissecondcategoryshow(false)
}

const handlecategoryclick = (category) => {
  setselectedcategory(category);
  console.log(category);
  setissecondcategoryshow(true);
};
const isitalol = () => {
  if (issecondcategoryshow) {
    console.log('second category show')
  }
}
const togglemenucate = () => {
  setismenucateshow(true);
};
const ustogglemenucate = () => {
  setismenucateshow(false);
 
};
const filderedproducts = data.filter(product => product.title.toLowerCase().includes(searchtext.toLocaleLowerCase()));
const handleInputChange = (event) => {
  setsearchtext(event.target.value);
  if (event.target.value !== '') {
    setshowclear(true);
  } else {
    setshowclear(false);
  }
};
const checkifsearchclear = () => {
  if (searchtext === '') {
    setshowclear(false);
  } else {
    setshowclear(true);
  }
};
const removeItem = (index) => {
  const updatedEnteredSearches = [...enteredseaches];
  updatedEnteredSearches.splice(index, 1);
  setenteredseaches(updatedEnteredSearches);
};
const displaysearchchange = (event) => {
  if (event.key === 'Enter'){
    const newenteredsearch = [...enteredseaches, searchtext];
  setenteredseaches(newenteredsearch);
  setsearchtext('');
  }
};
const clearsearch = () => {
  setenteredseaches([]);
}
const togglesearchscreen = () => {
  setissearchscreenshow(true); 
}
const untogglesearchscreen = () => {
  setissearchscreenshow(false); 
}
 const categories = [];
 data.forEach(product => {
   if (!categories.includes(product.category)) {
     categories.push(product.category);
   }
 });
const toggleMenu = () => {
  setismenushow(!ismenushow);
}
const untoggelmenu = () => {
  setismenushow(false); 
}
  const closescroll = () =>{
    setisscrollopen(false);
    document.body.style.overflow = 'hidden';
  }
  useEffect(() => {
if (ismenushow) {
  closescroll();
}
  }, [ismenushow]);

  useEffect(() => {
    if (!ismenushow) {
      openscroll();
    }
      }, [!ismenushow]);
 
      const alwaysshowscroll = () => {
        if (!ismenushow || !issearchscreenshow) ;
        setisscrollopen(true);
        document.body.style.overflow = 'auto';
      }
  const openscroll = () =>{ 
if (ismenushow || issearchscreenshow){
  setisscrollopen(false);
  document.body.style.overflow = 'hidden';
  }
  else {
    setisscrollopen(true);
    document.body.style.overflow = 'auto';
  }}
  
  
  const menubuttonnn = () => {
   
    toggleMenu();
  };


 const scrollfunctionright = () => {
  const newscrollposition = scrollableref.current.scrollLeft + (scrollableref.current.offsetWidth * 0.2);
  setscrollposition(newscrollposition);
  scrollableref.current.scrollTo({
    left: newscrollposition,behaviour:'smooth'
  });
 };
 const clearInput = () => {
  setsearchtext('');
  setshowclear(false);
};
 const scrollfunctionleft = () => {
  const newscrollposition = scrollableref.current.scrollLeft + (scrollableref.current.offsetWidth * -0.2);
  setscrollposition(newscrollposition);
  scrollableref.current.scrollTo({
    left: newscrollposition,behaviour:'smooth'
  });
 };
  const handleclick = () =>{setisclicked(true); 
  setTimeout(() => {
    setisclicked(false);
  }, 100);
  };
  useEffect(() => {
 
   
    function bestsellerproduct(){
     let count = 0;
      data.forEach((item) =>{
        if (item.bestseller === "true"){
         count++;
        }
      });
      setbestsellerproductcount(count);
     console.log(bestsellerproductcount);
    }
    function filterBestsellers() {
      const bestsellers = data.filter(item => item.bestseller === "true");
      setBestsellers(bestsellers);
    }
    const showconsoleifclearshow = () => {
      if (showclear){
        console.log('clear should show')

      }
      if (!showclear){
        console.log('clear shouldnt showwww')
      }
    }
    togglemenucate()
    showconsoleifclearshow()
    checkifsearchclear()
    alwaysshowscroll()
    filterBestsellers()
    bestsellerproduct()

  }, 
  
  
  []);
  
  return (
    
    <main>
   
   <div className={`addednotification ${isproductaddedtocart ? 'showw' : ''}`}>
    
    <p>Item has been added to cart successfully</p>
  </div>
    
        
    <div onClick={() => {untoggelmenu(); alwaysshowscroll();untogglesecondmenu();turnoffdropdown();}} className={`menuclose ${ismenushow ? 'show' : ''}`}></div>
  
   <div className={`menuslider ${ismenushow ? 'show' : ''}`}>
  
     <div className='logoclosebtn'>
    <img  className={`${issecondcategoryshow ? 'dontshow' : 'showimg'}`} src={logoo} />
   <div  onClick={() => {untogglesecondmenu(); togglemenucate();}} className={`secondmenugoback ${issecondcategoryshow ? 'secondshow' : ''}`}>
     <span><MdOutlineArrowBackIos /></span>
  
    <p>&nbsp;&nbsp;{selectedcategory}</p></div>  
     <div onClick={() => {untoggelmenu();untogglesecondmenu();turnoffdropdown();}} className='closemenubtn'><IoCloseSharp />
 </div>
 
 </div>
 
 <div className='menucatecontainer'>
     <ul className={`menucate ${ismenucateshow ? 'appear' : ''}`}> 
     {categories.map((category, index) => (
           <li onClick={() => {isitalol();ustogglemenucate(); handlecategoryclick(category);}}><p key={index}>{category}</p><span><IoIosArrowForward /></span></li>
         ))}
     </ul>
 <div className='secondmenudiv'>
     <ul className={`secondmenuslider ${issecondcategoryshow ? 'ssshow' : ''}`}>  
     {uniqueCompanies.map((company ,index) => (
   <li className={`secondli ${istoggledropdown  ?  'expanded' : ''}`} ><div onClick={() => {toggledropdown(company)}} className='secondfirsttext'><p key={index}>{company}&nbsp;{selectedcategory}</p><span ><FaChevronDown />
   </span></div>
 <div className={`secondsecondtext ${istoggledropdown  ?  'secondexpand' : ''}`}>
   {istoggledropdown[company] && (
 <>
 {filteredmap(company).map ((data,index) => 
 <>
 
 <li key={index} onClick={()=> selectedproduct(data)}> 
 
 <Link to={`/product/${data.title}`}>{data.title}</Link>
 </li>
 

 
 
 
 <br />
 </>
 )}
 
    </>
   )}
   </div>
   </li>
     ))} 
     
     </ul>
     </div>
     </div>
 </div>
 
 
 <div className={`searchscreen ${issearchscreenshow ? 'show' : ''}`}>
 {enteredseaches.length > 0 && (
 <div className='lastsearch'>
 <ul>
   <p style={{ fontSize: '25px',fontWeight: 'bold' }}>Your latest searches: </p>
  {enteredseaches.map((text,index) => (
   <li key={index} > {text} &nbsp;&nbsp;<FaRegTrashCan onClick={()=> removeItem(index)} />
   </li>
  )
  )}
 
  <span onClick={clearsearch}>To clear</span>
 </ul>
 </div>
 )}
  <div className="resultsContainer">
   <div className='results'>
   {searchtext == ''  || searchtext.length < 3 ? (
  <p></p>
   ) : (
          filderedproducts.map(product => (
           <div key={product.id} className="searchedcards">
             <div className='addtocartshowuphover'><button>Add To Cart</button></div>
           <div className='searchcardimg'>
           <Link to={`/product/${product.title}`}>
            <img src={product.img} onClick={() => {selectedproduct(product)}}></img>
            </Link>
            </div>
          
          
           <div className='searchcarddata'>
           <Link to={`/product/${product.title}`} className='searchlink'>
             <h3 onClick={() => {selectedproduct(product)}}>{product.title}</h3>
             </Link>
             <p>${product.newPrice}</p>
             </div>
             
           </div>
         ))
         )}
       </div>
       </div>
 
 
 
 
 
 
 
 
 </div>
 
       <div className='resslider'><b>Join Our Loyalty Program: Earn Points with Every Purchase!</b></div>
       <div className='header'>
         <div onClick={() => {menubuttonnn();togglemenucate();}} className='burgericon'>&#9776;</div>
         <div className='logodiv'>
        <Link to="/">
 <img className='logo' src={logoo} alt='logo' onClick={handleRefresh}></img></Link>
 </div>
 <div className='search'>
   
   <div className='searchicon'><FaSearch /></div>
   <input onKeyDown={displaysearchchange} value={searchtext} onChange={handleInputChange} onClick={() => {togglesearchscreen(); closescroll();}} className='searchfield'></input>
   
   {showclear && (
   <span onClick={clearInput}>
     <span className='underlined'>Reset </span> <IoMdCloseCircleOutline />
   
   </span> 
 )}
 
 </div>
 {issearchscreenshow && (
 
 
 <p className='searchp' onClick={() => { setshowclear(false); setsearchtext('');untogglesearchscreen(); alwaysshowscroll();}}><IoCloseSharp /></p>)} 
 <Link to='/profilepage'>
 <div className='profilecard'>
       <span className='profileicon' role="img" aria-label="user">
       <CgProfile />
       </span>
       <p>User Profile</p>
     </div>
     </Link>
     <Link to='/Cartpage' className='carta'>
     <div className='cartcard'>
 <div className='cartnotification'>{cartitemslenght}</div> 
       <span className='carticon' role="img" aria-label="user">
       <FiShoppingCart />
       </span>
       <p>Shopping Cart</p>
 
     </div>
     </Link>
       </div>
     
     <div className='companiescontainer'>
       <div className='companies'>
      
 <Link to={`/categorypage/Nike`} onClick={() => {filternikeproducts();setcompanynamenike();}} className='searchlink'>
 <div className='nikecard'><img src={nikelogo} alt='nikelogo'></img><p>Nike</p></div>
 </Link>
 <Link to={`/categorypage/Puma`} onClick={() => {setcompanynamepuma();filterpumaproducts();}} className='searchlink'>
 <div className='pumecard' ><img src={pumalogo} alt='pumalogo'></img><p>Puma</p></div>
 </Link>
 <Link to={`/categorypage/Vans`} onClick={() => {setcompanynamevans();filtervansproducts();}} className='searchlink'>
 <div className='vanscard' ><img src={vanslogo} alt='vanslogo'></img><p>Vans</p></div>
 </Link>
 <Link to={`/categorypage/Adidas`} onClick={() => {setcompanynameadidas();filteradidasproducts();}} className='searchlink'>
 <div className='adidascard' ><img src={adidaslogo} alt='adidaslogo'></img><p>Adidas</p></div>
 </Link>
 </div>
 </div>
 
  <div className='`mainbanner`'>
  
   <div className='mainbannerprice' onClick={selectedsupremesneakers}>
     <p className='dollarsign'>$</p>
     <p className='price'>99</p>
     <p className='nike'>Adidas Superstar shoe</p>
   <Link to={`/product/${supremesneakers.title}`}>
   <button onClick={selectedsupremesneakers}>Shop Now &nbsp; <IoMdArrowDroprightCircle /></button></Link>
   </div>

   <div className='imgdiv'>

   
   <p className='bannertext'>Be<br /> Bold.<br />  Step<br /> Forward</p>  
   <Link to={`/product/${supremesneakers.title}`}>
   <img className='mainbannerimg' src={mainbanner} alt='mainbanner' onClick={selectedsupremesneakers}></img></Link>
   
   </div>
   </div>
  
 <div className='catecardscontainer'>
 <div className='catecards'> 
 <Link to={`/categorypage/Flats`}>
     <img src={flatsbanner} alt='flatsbanner' onClick={()=> {setcategorynameflats();filterflatsproducts();}}></img></Link>
     <div className='catebutton'> 
       <p>Flats</p>
       <Link to={`/categorypage/Flats`}>
       <button onClick={()=> {setcategorynameflats();filterflatsproducts();}}>Look At &nbsp; <IoMdArrowDroprightCircle /></button> </Link>
     </div>
   </div>
   <div className='catecards'> 
   <Link to={`/categorypage/Heels`}>
     <img src={heelsbanner} alt='heelsbanner' onClick={()=> {setcategorynameheels();filterheelsproducts();}}></img></Link>
     <div className='catebutton'> 
       <p>Heels</p>
       <Link to={`/categorypage/Heels`}>
       <button onClick={()=> {setcategorynameheels();filterheelsproducts();}}>Look At &nbsp; <IoMdArrowDroprightCircle /></button></Link>
     </div>
   </div>
   <div className='catecards'>
   <Link to={`/categorypage/Sneakers`}>
   <img src={sneakersbanner} alt='sneakersbanner' onClick={()=>{setcategorynamesneakers();filtersneakersproducts();}}></img></Link>
     <div className='catebutton'> 
       <p>Sneakers</p>
       <Link to={`/categorypage/Sneakers`}>
       <button onClick={()=>{setcategorynamesneakers();filtersneakersproducts();}}>Look At &nbsp; <IoMdArrowDroprightCircle /></button></Link>
     </div>
   </div>
   <div className='catecards'>
   <Link to={`/categorypage/Sandals`}>
   <img src={sandalsbanner} alt='sandalsbanner' onClick={()=>{setcategorynamesandals();filtersandalsproducts();}}></img></Link>
     <div className='catebutton'> 
       <p>Sandals</p>
       <Link to={`/categorypage/Sandals`}>
       <button onClick={()=>{setcategorynamesandals();filtersandalsproducts();}}>Look At &nbsp; <IoMdArrowDroprightCircle /></button></Link>
     </div>

   </div>
   
 </div>
 <div  onMouseEnter={() =>setishoverd(true)} onMouseLeave={() =>setishoverd(false)} className='bestseller'> 
 <div className='bestsp'>
   <p>
  <b> Bestsellers </b><br />
  <span style={{ fontSize: "13px" }} > Get inspired</span>
   </p>
   <p style={{ paddingTop: "1.5em" ,  fontSize: "13px" }}> 
  
   {bestsellerproductcount} articles
   </p>
 </div>
 {ishoverd &&(
 <div id='rightarrow' style={{ opacity: ishoverd ? 1 : 0 }} className={`sliderbutton ${isclicked ? 'clickedsliderbutton' : ''}`} onClick={ () => {handleclick(); scrollfunctionright();}}><IoIosArrowForward />
 
 </div>
    )}
 
 <div ref={scrollableref} className='bestproductscontainer'>
  
 {bestsellers.map((item, index) =>(
 
 <div className='bestsellersingleproduct' onClick={()=> selectedproduct(item)}>
   <div className='bestsellerimg'>
   <Link to={`/product/${item.title}`}>
 <img src={item.img} alt='sandalsbanner'></img> </Link>
 </div>
     <div className='bestsellerbutton'> 
     <Link to={`/product/${item.title}`} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
       <p className='bestsellertitle'>{item.title}</p></Link>
       <div className='pricebuttonbestsellers'>
       <p><span style={{ textDecoration: "line-through" }}>{item.prevPrice}</span> <br /><b>${item.newPrice}</b></p>
       <select placeholder id='addtocartbtn' value='selectedsize' className='bestsellerbuttonbutton'onChange={(e)=> {getItems();addproducttoccart(item ,e.target.value)}} >
       <option value=""  selected>Size</option>
{sizes.map((size,index) => (
  <option key={index} value={size}>{size}</option>
))}


        </select>
       </div>
     </div>
     
 </div>

 ))}
 

 
    </div>
    {ishoverd &&(
 
 <div id='leftarrow' style={{ opacity: ishoverd ? 1 : 0 }} className={`sliderbutton ${isclicked ? 'clickedsliderbutton' : ''}`} onClick={ () => {handleclick(); scrollfunctionleft();}}><IoIosArrowBack />
    </div>
    )}
    
    </div>
 





 <div className='servicescontainer'>
   <p style={{ fontWeight: 'bold' }}>What do our customers think of our services? *</p>
   <div className='services'>
     <div className='serv'>
     <TbTruckDelivery />
     <br />
     <p style={{ fontWeight: 'bold' }}>Delivery</p>
     <p style={{ fontSize: '11px' }}>within</p>
     <p style={{ fontSize: '11px' }}>2 to 3 working days</p>
     <br />
     <p style={{ fontSize: '10px' , fontStyle: 'italic'}}>{"« Fast delivery, excellent service, kudos »"}</p><br />
     <p style={{ fontSize: '10px' }}>17/3/2022</p>
     </div>
 
       <div className='serv'> <br />  
         <ImLoop2 />
       <br />
     <p style={{ fontWeight: 'bold' }}>Return</p>
     <p style={{ fontSize: '11px' }}>30 Days</p>
     <p style={{ fontSize: '11px' }}>reflection period</p>
     <br />
     <p style={{ fontSize: '10px' , fontStyle: 'italic'}}>{"« I would like to thank you all very much for the excellent service you provide on all fronts »"}</p><br />
     <p style={{ fontSize: '10px' }}>22/12/2021</p>
       </div>
 
         <div className='serv'> <br /> <img src={logoo}></img>
         <br />
     <p style={{ fontWeight: 'bold' }}>Foot Wear</p>
     <p style={{ fontSize: '11px' }}>$1 = 1 savings point</p>
     <p style={{ fontSize: '11px' }}>500 points = 15% discount
 </p>
     <br />
     <p style={{ fontSize: '10px' , fontStyle: 'italic'}}>{"« Compliment for the fast delivery! And it's also nice that I can pay afterwards! and save points in the meantime.. Great! »"}</p><br />
     <p style={{ fontSize: '10px' }}>31/5/2023</p>
     </div>
   </div>
   <p style={{ fontSize: '10px' , fontStyle: 'italic'}}>* Obtained via a post-purchase questionnaire</p>
 </div>
 
 
   <div className='Customer-service'>
 <div className='Customer-servicecont1'>
 <p style={{ fontWeight: 'bold' }}>Customer service</p>
 </div>
 <div className='cservices'>
   <div className='cserv'>
   <FaWhatsapp /><br />
 
   <p style={{ fontWeight: 'bold' }}>Via Whatsapp</p><br />
   <p style={{ fontSize: '10px' }}>Reply Within 2 hours</p>
   <p style={{ fontSize: '10px' }}>Mon-Fri. 9am-5pm</p> 
 <p style={{ fontSize: '10px' }}>Except on public holidays</p>
   </div>
   <div className='cserv'>
   <MdEmail /><br />
 
   <p style={{ fontWeight: 'bold' }}>Send Us an E-mail</p><br />
   <p style={{ fontSize: '10px' }}>Reply Within 12 hours</p>
   <p style={{ fontSize: '10px' }}>Mon-Fri. 9am-5pm</p>
 <p style={{ fontSize: '10px' }}>Except on public holidays</p>
   </div>
   <div className='cserv'>
   <FaFacebookMessenger /> <br />
 
   <p style={{ fontWeight: 'bold' }}>Via Messenger</p><br />
   <p style={{ fontSize: '10px' }}>Reply Within 2 hours</p>
   <p style={{ fontSize: '10px' }}>Mon-Fri. 9am-5pm</p> 
 <p style={{ fontSize: '10px' }}>Except on public holidays</p>
   </div>
 </div>
 <div className='Customer-servicecont2'>
   <div>
    <p  style={{ fontWeight: 'bold' }}>Need Help ?</p>
     <br /><br /><p className='cservsmll'  style={{ fontSize: '10px' }}>Frequently Asked Questions</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Contact Form</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Privacy & Save Shopping</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Cookies</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Size Chart</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Sitemap</p>
   </div>
   <div>
    <p  style={{ fontWeight: 'bold' }}> Services</p>
     <br /><br /><p className='cservsmll' style={{ fontSize: '10px' }}>All Services</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Track Orders</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Returns</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Delivery</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Secure Payment</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Savings Program</p>
   </div>
   <div>
    <p  style={{ fontWeight: 'bold' }}>About Foot Wear</p>
     <br /><br /><p className='cservsmll' style={{ fontSize: '10px' }}>Who are we?</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Terms and conditions</p>
     <p className='cservsmll' style={{ fontSize: '10px' }}>Yes for integrity</p>
   </div>
   <div>
    <p  style={{ fontWeight: 'bold' }}> Follow Us</p>
     <br /><br /><p className='cservsmll1' style={{ fontSize: '10px' }}>On our Social Media 
 </p>
 <p className='cservsmll'><span style={{ fontSize: '30px' }}><LuFacebook /></span></p>
  
     <p className='cservsmll' style={{ fontSize: '10px' }}>The Foot Wear App</p>
     <p className='cservsmll'><span style={{ fontSize: '30px' }}><IoLogoGooglePlaystore /> <FaApple />
 
 </span></p>
   </div>
   <div className='straignline'>|<br/>|<br/>|<br/>|<br/>|<br/>|<br/>|<br/>|<br/>|</div>
   <div className='cservsmll2'>
   <p  style={{ fontWeight: 'bold' }}>We'll keep in touch</p> <br/> <br/>
   <p style={{ fontSize: '10px' }}>Subscribe to our newsletter, we promise to spoil you!</p> <br/>
   <button   style={{ fontWeight: 'bold' }}><MdEmail />  &nbsp;Surprise me <IoIosArrowForward /></button>
   </div>
 </div>
 
 
 <div className='lastfooter'>
     <p>Sitemap catalog - Sitemap landing - Overview of site services - Products sitemap</p>
     <p>Our customers have confidence in us. View Foot Wear 's reviews on Google: 4.6 / 5 stars ( 793 opinions )</p>
     <p>© 2023 Foot Wear</p>
     <p>Foot Wear.nl for the online purchase of clothing, shoes and fashion accessories for women, men and children. Discover our collections: graphic t-shirts, polo shirts and sleeveless tops with print , women's dresses , evening dresses , denim skirts , shorts , Bermuda shorts with pockets , capri pants , swimsuits , bikinis, swimming shorts , pumps , sandals and slippers . And don't forget the essential jackets , tunics , jeans and trousers . Neat or casual fashion, our trendy fashion is always priced small. There is a large selection of clothes and shoes for babies for all mothers. We also have a collection of elegant and comfortable maternity clothes . Discover our plus size fashion department for women ( dresses , tops , tunics , lingerie ) and men ( t-shirts , shirts , suits , trousers ). There is also our fancy dress department for all your parties . At Foot Wear.nl you will find offers and new collections all year round .</p>
     <p>Black Friday</p>
     <p>Women's clothing - Women's dresses - Women's bikini - Women's sneakers - Women's sweatpants</p>
     <p>Lingerie - bra - Bathrobe ladies</p>
     <p>Men's clothing - Boxers</p>
     <p>Girls clothes - Girls pajamas Boys clothes - Baby clothes - Dress up clothes - Bedding - Clothing Sale</p>
 </div>
   </div>
 
   
  
 
   </main>
  );
}

export default Product;
