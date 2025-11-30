import { TrendingDown, Wind, Leaf } from 'lucide-react';

export default function Impact() {
  return (
    <div className="bg-green-700 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">
            Environmental Impact
          </h1>
          <p className="text-xl text-green-100">
            Biomass delivers major air quality improvements while providing reliable energy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-transform duration-300 ease-out hover:scale-110 cursor-pointer flex flex-col items-center text-center shadow-lg hover:shadow-2xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingDown className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">80-90%</h2>
            <p className="text-white/90 text-sm">
              CO<sub>2</sub> emissions reduction compared to coal
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-transform duration-300 ease-out hover:scale-110 cursor-pointer flex flex-col items-center text-center shadow-lg hover:shadow-2xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Wind className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">40-80%</h2>
            <p className="text-white/90 text-sm">
              Reduction in particulate matter and sulfur emissions
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-transform duration-300 ease-out hover:scale-110 cursor-pointer flex flex-col items-center text-center shadow-lg hover:shadow-2xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">100%</h2>
            <p className="text-white/90 text-sm">
              Renewable and carbon-neutral energy source
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}