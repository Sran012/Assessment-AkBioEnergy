import { Check } from 'lucide-react';
import { cards } from '@/data/data';

export default function AKBioEnergy() {
  return (
    <div className="bg-linear-to-br from-green-50 to-green-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose AK Bio Energy?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're more than just a supplier – we're your partner in sustainable energy solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 cursor-pointer"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <card.icon className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-xl font-semibold text-green-700 mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>


              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-lg max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Our Promise
          </h2>
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            At AK Bio Energy, we see every client as a partner in building a cleaner energy future. 
            We value trust, transparency, and collaboration in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
}