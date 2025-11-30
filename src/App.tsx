import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About } from './components/About/About';
import {Product} from './components/Product';
import {Footer} from './components/Footer';
import WhyAK from './components/WhyAK';
import Impact from './components/Impact';
import AboutOrg from './components/About/AboutOrg';
import ContactUs from './components/Contact/ContactUs';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <>
     <Toaster position="top-right" />
      <Navbar/>
      <Hero/>
      <About/>
      <Product/>
      <WhyAK/>
      <Impact/>
      <AboutOrg/>
      <ContactUs/>
      <Footer/>
    </>
  )
}
