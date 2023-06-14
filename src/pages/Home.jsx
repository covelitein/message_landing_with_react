import Header from "../components/Header"
import Modal from "../components/Modal"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import PageScrollProgressBar from "../components/PageScrollProgressBar"
import Footer from "../components/Footer"
import About from "../components/About"


const Home = () => {

  return (
    <section className="relative">
      <Header/>
      <Hero/>
      <Cards/>
      <About />

      <PageScrollProgressBar/>
      <Modal/>
      
      <Footer/>
    </section>
  )
}

export default Home
