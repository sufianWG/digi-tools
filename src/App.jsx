import { useEffect, useState } from 'react'
import './App.css'
import AllTools from './components/AllTools/AllTools'
import CountDown from './components/CountDown/CountDown'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'
import { ToastContainer } from 'react-toast'

function App() {
  const [ProductData, SetProductData] = useState([])
  const [cartItem, setCartItem] = useState([]);
  // console.log(ProductData);
  // console.log(cartItem);


  useEffect(() => {
    const fetchToolsData = async () => {
      const res = await fetch("proudctData.json");
      const resJson = await res.json();
      // console.log(resJson);
      SetProductData(resJson);
    }
    fetchToolsData();
  }, [])


  return (
    <>
      <NavBar cartItem={cartItem}></NavBar>
      <HeroSection></HeroSection>
      <CountDown></CountDown>
      <AllTools ProductData={ProductData} cartItem={cartItem} setCartItem={setCartItem}></AllTools>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
