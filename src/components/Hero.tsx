import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Box, Mail } from "lucide-react";
import { slides } from "@/data/data";

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
                  className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white max-w-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1.0, delay: 0.3 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-3">{slide.title}</h1>
                  <p className="text-lg md:text-xl">{slide.subtitle}</p>
                  <button className="bg-green-600 p-3 rounded-xl mt-6">Contact Us </button>
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
              currentIndex === i ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

        <div className="md:hidden fixed bottom-0 w-full bg-white h-14 z-20">
          <div className="overflow-hidden flex justify-around items-center h-full">
            <a href="#Home"><Home className="w-4 h-4"/></a>
            <a href="#AboutOrg"><Info className="w-4 h-4"/></a>
            <a href="#Products"><Box className="w-4 h-4"/></a>
            <a href="#ContactUs"><Mail className="w-4 h-4"/></a>    
          </div>
        </div>


    </div>
  );
}
