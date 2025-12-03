import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Box, Mail,Phone } from "lucide-react";
import { slides } from "@/data/data";
import { Button } from "./ui/button";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="Home" className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) => {
          return (
            currentIndex === index && (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >

                <div className="absolute inset-0 bg-black/50"></div>
                <motion.div
                  className="absolute left-2 md:left-10 top-1/2 transform -translate-y-1/2 text-white max-w-2xl"
                  initial={{ opacity: 0, y: 120 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-3 font-heading">{slide.title}</h1>
                  <p className="text-2xl md:text-xl font-body">{slide.subtitle}</p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 p-6 rounded-xl mt-6 text-xl">Contact Us <Phone/> </Button>
                </motion.div>
              </motion.div>
            )
          );
        })}
      </AnimatePresence>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === i ? "bg-white scale-120" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

        <div className="md:hidden fixed bottom-0 w-full bg-white h-16 z-20 shadow-top">
          <div className="overflow-hidden flex justify-around items-center h-full">
            <a href="#Home"><Home className="w-6 h-6"/></a>
            <a href="#AboutOrg"><Info className="w-6 h-6"/></a>
            <a href="#Products"><Box className="w-6 h-6"/></a>
            <a href="#ContactUs"><Mail className="w-6 h-6"/></a>    
          </div>
        </div>


    </div>
  );
}
