import image1 from "@/assets/heroImages/760e8b9be82b9b0effa5f84dfa840195.jpeg";
import image2 from "@/assets/heroImages/5ac6338c6467f91a5ad46ff49c375ae7.png";
import image3 from "@/assets/heroImages/f3cc8a62c0c383f585d6779550d533de.png";
import image4 from '../assets/productImages/c9f6073d39551ead396b36056528219a.jpg';
import image5 from "../assets/productImages/c11ddb42bc5e129721a9709744e68de4.webp"
import image6 from "../assets/productImages/938b460bc8cd65d6ee19c64f9fdefe17.webp"
import image7 from "../assets/productImages/5a78f4338391b60226b3ee2ff700245a.jpg"
import image8 from "../assets/productImages/1e845acf4ca45d3586621e3bfd5882d7.jpg"

import { Users, Award, Truck, Shield, Flame, Leaf, DollarSign } from 'lucide-react';


type slidesType = {
    image: string;
    title: string;
    subtitle: string;
}

export const slides : slidesType[] = [
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


type productType = {
    image: string;
    title: string;
    description: string;
    tag: string;
}

export const products : productType[] = [
    {
      image: image4,
      title: 'Mustard Husk Pellets',
      description: 'High-energy pellets from mustard agricultural waste',
      tag: 'High Energy Efficiency'
    },
    {
      image: image5,
      title: 'Groundnut Husk Pellets',
      description: 'Sustainable fuel from groundnut processing residue',
      tag: 'Eco-Friendly Fuel'
    },
    {
      image: image6,
      title: 'Sugarcane Bagasse Pellets',
      description: 'Renewable energy from sugarcane fiber waste',
      tag: 'Carbon Neutral'
    },
    {
      image: image7,
      title: 'Wood Pellets',
      description: 'Premium quality wood biomass pellets',
      tag: 'Premium Quality'
    },
    {
      image: image8,
      title: 'Rice Husk Pellets',
      description: 'Eco-friendly pellets from rice processing waste',
      tag: 'Low Ash Content'
    },
   
  ];


type cardType = {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    showCheck: boolean;
}

export const cards : cardType[] = [
    {
      icon: Users,
      title: "Reliable Trading Partner",
      description: "Strong sourcing network with established supplier relationships",
      showCheck: true
    },
    {
      icon: Award,
      title: "Consistent Quality",
      description: "Moisture-controlled, dense pellets that meet industry standards",
      showCheck: false
    },
    {
      icon: Truck,
      title: "Flexible Supply",
      description: "From small consignments to bulk orders, we adapt to your needs",
      showCheck: false
    },
    {
      icon: Shield,
      title: "Sustainability Commitment",
      description: "Long-term partnerships focused on environmental responsibility",
      showCheck: false
    }
  ];



interface Titles {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

export const titles: Titles[] = [
    { title: "High Energy Efficiency", desc: "Reliable heat for industrial applications with consistent burning properties", icon: <Flame /> },
    { title: "Green & Eco-Friendly Fuel", desc: "A cleaner alternative to coal with significantly reduced carbon emissions", icon: <Leaf /> },
    { title: "Cost Effective Energy", desc: "Consistent supply and stable pricing for better budget planning", icon: <DollarSign /> },
]

