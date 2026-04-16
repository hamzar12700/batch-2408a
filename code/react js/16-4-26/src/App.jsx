import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer"
import ShopingCarts from "./Component/ShopingCarts";

function App() {

  function greet(){
    console.log("btn clicked...........");
    
  }

  return (
    <>

   <Navbar/>
   <HeroSection/>
   <div className="boxShoping">

   <ShopingCarts/>
   <ShopingCarts/>
   <ShopingCarts/>
   <ShopingCarts/>
   <ShopingCarts/>
   <ShopingCarts/>
   <ShopingCarts/>
   <ShopingCarts/>
   </div>
   <Footer/>

    </>

  )
}

export default App
