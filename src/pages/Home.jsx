import {
  Header,
  Hero,
  Cards,
  About,
  Services,
  Faqs,
  Testimonial,
  OurTeam,
  Hook,
  Footer,
  PageScrollProgressBar,
  Modal,
} from "../components";

const Home = () => {

  return (
    <section className="relative">
      <Header />
      <Hero />
      <Cards />
      <About />
      <Services />
      <Faqs />
      <Testimonial />
      <OurTeam />
      <Hook />
      <Footer />


      <PageScrollProgressBar />
      <Modal />
      
    </section>
  )
}

export default Home
