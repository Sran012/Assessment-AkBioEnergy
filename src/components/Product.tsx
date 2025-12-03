import { useState } from 'react';
import { Leaf } from 'lucide-react';
import { products } from '@/data/data';

type ProductCardProps = {
    image: string;
    title: string;
    description: string;
    tag: string;
    tagIcon?: React.ReactNode;
}

const ProductCard = ({ image, title, description, tag, tagIcon }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-card rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}
        />
        
        <div 
          className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full p-3 transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0) rotate(0deg)' : 'translateY(-20px) rotate(-180deg)'
          }}
        >
          {tagIcon || <Leaf className="w-5 h-5 text-white" />}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">{title}</h3>
        <p className="text-muted-foreground mb-4 font-body">{description}</p>
        
        {tag && (
          <div 
            className="flex items-center gap-2 text-primary font-semibold transition-all duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
            }}
          >
            <Leaf className="w-4 h-4" />
            <span>{tag}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export function Product() {
  return (
    <div id="Products" className="bg-linear-to-b from-accent to-accent/80 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 font-heading">
            Our Product Range
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            At AK Bio Energy, we trade and supply high-quality biomass pellets from various agricultural and woody residues
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              tag={product.tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
