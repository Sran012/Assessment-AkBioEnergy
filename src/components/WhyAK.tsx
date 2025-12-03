import { Check } from 'lucide-react';
import { cards } from '@/data/data';

export default function AKBioEnergy() {
  return (
    <div className="bg-linear-to-br from-accent to-accent/80 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Why Choose AK Bio Energy?
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            We're more than just a supplier – we're your partner in sustainable energy solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 py-12 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 cursor-pointer"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <card.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4 font-heading">
                {card.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>


              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-7 h-7 bg-primary rounded-full flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-10 shadow-lg max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6 font-heading">
            Our Promise
          </h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed font-body">
            At AK Bio Energy, we see every client as a partner in building a cleaner energy future. 
            We value trust, transparency, and collaboration in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
}
