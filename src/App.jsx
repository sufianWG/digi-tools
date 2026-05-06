import './App.css'
import CountDown from './components/CountDown/CountDown'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <CountDown></CountDown>
      <Footer></Footer>
    </>
  )
}

export default App
