import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🌿</span>
              </div>
              <h3 className="text-white text-xl font-bold">AK Bio Energy</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              An initiative of Vikram Jaglan Group, dedicated to providing sustainable biomass pellet solutions for a cleaner energy future.
            </p>
          </div>

          <div className="md:w-1/3">
            <h4 className="text-white text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <span className="text-yellow-500">🌾</span>
                <span>Mustard Husk Pellets</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <span className="text-amber-600">🥜</span>
                <span>Groundnut Husk Pellets</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <span className="text-red-500">🌱</span>
                <span>Sugarcane Bagasse Pellets</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <span className="text-gray-400">🥥</span>
                <span>Coconut Husk Pellets</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <span className="text-green-600">🌲</span>
                <span>Wood Pellets</span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3">
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#Home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#AboutOrg" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#Products" className="hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#Contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>


        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 AK Bio Energy. All rights reserved. | An initiative of Vikram Jaglan Group
          </p>
          
  
          <button
            onClick={scrollToTop}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
