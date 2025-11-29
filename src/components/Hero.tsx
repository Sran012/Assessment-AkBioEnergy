// Hero.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/760e8b9be82b9b0effa5f84dfa840195.jpeg";
import image2 from "../assets/5ac6338c6467f91a5ad46ff49c375ae7.png";
import image3 from "../assets/f3cc8a62c0c383f585d6779550d533de.png";

const slides = [
  {
    image: image1,
    title: "Sustainable Industrial Power",
    subtitle: "Eco-friendly alternatives to fossil fuels",
    
  },
  {
    image: image2,
    title: "Fueling Industries, Sustaining Tomorrow",
    subtitle: "High-quality biomass pellets for burners & boilers",
  },
  {
    image: image3,
    title: "Renewable Energy Solutions",
    subtitle: "Carbon-neutral fuel for a cleaner future",
  },
];


export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
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
                  <button className="bg-green-700 p-3 rounded-xl mt-6">Contact Us </button>
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
    </div>
  );
}
