import Header from "../components/Header"
import Modal from "../components/Modal"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import PageScrollProgressBar from "../components/PageScrollProgressBar"
import Footer from "../components/Footer"
import About from "../components/About"
import Services from "../components/Services"
import Hook from "../components/Hook"
import Testimonial from "../components/Testimonial"
import Faqs from "../components/Faqs"
import OurTeam from "../components/OurTeam"


const Home = () => {

  return (
    <section className="relative">
      <Header />
      <Hero/>
      <Cards/>
      <About />
      <Services/>
      <Faqs />
      <Testimonial/>
      <OurTeam />
      <Hook />
      <Footer/>


      <PageScrollProgressBar/>
      <Modal/>
      
    </section>
  )
}

export default Home
