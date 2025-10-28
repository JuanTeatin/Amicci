import "./App.css"

import About from "./components/about/About";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Reservation from "./components/reservation/Reservation";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Reservation />
      <Features />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App; 