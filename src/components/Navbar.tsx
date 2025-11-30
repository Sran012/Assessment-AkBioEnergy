import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) 
        setScrolled(true);
      else 
        setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-b text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto px-8 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
            <img src="/logo-BqbJNhjs.png" alt="logo" className="h-10 w-10"></img>
            <div className="font-bold text-xl">AK Bio Energy</div>
        </div>
        <ul className="hidden md:flex gap-8 font-semibold ">
          <a href="#Home" className={` hover:text-green-600 ${scrolled && "text-black"}`}>Home</a>
          <a href="#AboutOrg" className={` hover:text-green-600 ${scrolled && "text-black"}`}>About</a>
          <a href="#Products" className={` hover:text-green-600 ${scrolled && "text-black"}`}>Products</a>
          <a href="#ContactUs" className={` hover:text-green-600 ${scrolled && "text-black"}`}>Contact</a>
        </ul>
      </div>
    </nav>
  );
}
