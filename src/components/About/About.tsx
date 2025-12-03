import image from "@/assets/aboutImages/c982c754c02d22515734ce8da6ea6b97.jpeg"
import { titles } from "@/data/data";
import { TrendingDown } from 'lucide-react';

export function About() {
    return (
        <div id="About" className='py-10 px-6 sm:px-10 lg:px-20'>
            <h2 className="text-4xl font-bold mt-4 text-foreground font-heading">About Biomass Pellets</h2>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 mt-8">
                <div className="w-full lg:w-1/2">
                    <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-body">
                        Biomass pellets are a renewable, carbon-neutral energy source made from agricultural and woody residues. They represent the future of sustainable industrial energy solutions.
                    </p>
                    
                    {titles.map((item, index) => (
                        <div className='flex flex-col justify-between mt-4 rounded-2xl py-4 pr-4 hover:bg-primary/10 hover:pl-4 transition-all duration-300' key={index}>
                            <div className='flex gap-3 sm:gap-4'>
                                <div className='h-12 w-12 sm:h-14 sm:w-14 flex justify-center items-center bg-accent text-primary rounded-full shrink-0'>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='font-bold text-lg sm:text-xl'>{item.title}</h3>
                                    <p className='text-muted-foreground text-sm sm:text-base pt-1'>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full lg:w-1/2">
                    <div className='lg:pl-12 xl:pl-20 relative'>
                        <img 
                            src={image} 
                            alt="Biomass Pellets" 
                            className="rounded-3xl shadow-lg w-full h-auto object-cover transition-all duration-300 hover:scale-102"
                        />
                        
                        <div className='absolute bottom-21 left-2 md:bottom-28 md:left-24 bg-card shadow-black shadow-xl rounded-2xl hover:scale-105 transition-all duration-300'>
                            <div className='p-3 sm:p-4 flex items-start gap-2 sm:gap-3'>
                                <div className='h-10 w-10 sm:h-12 sm:w-12 flex justify-center items-center bg-accent text-primary rounded-full shrink-0'>
                                    <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold text-base sm:text-lg'>80-90%</h4>
                                    <p className='text-black/80 text-xs sm:text-sm'>CO<sub>2</sub> reduction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
