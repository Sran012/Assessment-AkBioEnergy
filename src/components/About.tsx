import { Flame } from 'lucide-react';
import { Leaf } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import React from 'react';
import AboutImage from "../assets/c982c754c02d22515734ce8da6ea6b97.jpeg"


export const About = () => {

    interface Titles {
        title: string;
        desc: string;
        icon: React.ReactNode;
    }

    const titles:Titles[] = [
        { title: "High Energy Efficiency", desc: "Reliable heat for industrial applications with consistent burning properties", icon: <Flame/> },
        { title: "Green & Eco-Friendly Fuel", desc: "A cleaner alternative to coal with significantly reduced carbon emissions", icon: <Leaf/> },
        { title: "Cost Effective Energy", desc: "Consistent supply and stable pricing for better budget planning", icon: <DollarSign/> },
    ]

    return (
        <div className='py-10'>
            <h2 className="text-4xl font-bold mt-4 px-20">About Biomass Pellets</h2>
                <div className="flex justify-between items-center px-20">
                    <div className="w-1/2">
                        <p className="mt-8 text-xl text-black/80">Biomass pellets are a renewable, carbon-neutral energy source made from agricultural and woody residues. They represent the future of sustainable industrial energy solutions.</p>
                        {titles.map((item, index) => (
                            <div className='flex flex-col justify-between mt-4 rounded-2xl py-4 pr-4 hover:bg-green-200 hover:pl-4 transition-all duration-300 hover:scale-102' key={index}>
                                <div className='flex gap-2'>
                                    <div className='h-14 w-14 flex justify-center items-center bg-green-300 my-4 ml-4 rounded-full'>{item.icon}</div>
                                    <div className='flex flex-col'>
                                        <h3 className='font-bold text-xl pt-4'>{item.title}</h3>
                                        <p className='text-black/80 pt-1'>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-1/2">
                        <div className='pl-20 relative'>
                            <img src={AboutImage} alt="Biomass Pellets" className="rounded-3xl shadow-lg h-100 w-200 transition-all duration-300 hover:scale-104"/>
                            <div className='absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 h-25 w-46 bg-white shadow-2xl rounded-2xl hover:scale-110 transition-all duration-300'>
                                <div className='p-4 flex items-start gap-3'>
                                    <div className='h-12 w-12 flex justify-center items-center bg-green-300 rounded-full mt-2'>{<Leaf/>}</div>
                                    <div className='flex flex-col mt-2'>
                                        <h4 className='font-bold text-lg'>80-90%</h4>
                                        <p className='text-black/80 text-sm'>CO<sub>2</sub> reduction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}