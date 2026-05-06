import { useEffect, useState } from 'react'
import './App.css'
import AllTools from './components/AllTools/AllTools'
import CountDown from './components/CountDown/CountDown'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [ProductData, SetProductData] = useState([])
  // console.log(ProductData);
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
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <CountDown></CountDown>
      <AllTools ProductData={ProductData}></AllTools>
      <Footer></Footer>
    </>
  )
}

export default App
