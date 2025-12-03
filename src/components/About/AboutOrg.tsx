import { Sprout, Flame, Users, Target, Award } from 'lucide-react';

export default function AboutOrg() {
  return (
    <div id="AboutOrg" className="bg-linear-to-br from-accent to-accent/80 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="flex justify-center mb-8">
          <div className="bg-white p-4 rounded-full shadow-md">
            <Flame className="w-8 h-8 text-primary" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 flex items-center justify-center gap-3 font-heading">
          <Sprout className="w-10 h-10 text-primary" />
          About AK Bio Energy
        </h1>

        <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 mb-12 hover:scale-102 duration-300 transition-transform">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
            <span className="font-semibold text-primary">AK Bio Energy</span> is an initiative of{' '}
            <span className="font-semibold text-gray-800">Vikram Jaglan Group</span>, created with a vision for a cleaner and better future.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
            As part of a diversified group with deep roots in manufacturing and trade, AK Bio Energy represents our commitment to sustainability and responsibility. This initiative was born out of a drive to reduce dependency on coal and fossil fuels, and to create renewable energy solutions that make industrial operations greener and more cost-efficient.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
            Through AK Bio Energy, the Group is channeling its expertise and network into building a supply chain of reliable, high-quality biomass pellets — an energy source that not only powers industries but also protects the planet.
          </p>

          <div className="bg-accent border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-foreground text-lg font-medium flex items-start gap-2">
              <span className="text-2xl">👉</span>
              <span>This is more than business — it's our contribution to a sustainable tomorrow.</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 text-center transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-accent p-4 rounded-full">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 font-heading">Partnership</h3>
            <p className="text-muted-foreground leading-relaxed font-body">
              Building long-term relationships with clients and suppliers
            </p>
          </div>

          <div className=" p-6 text-center transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-accent p-4 rounded-full">
                <Target className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 font-heading">Sustainability</h3>
            <p className="text-muted-foreground leading-relaxed font-body">
              Committed to environmental responsibility and clean energy
            </p>
          </div>

          <div className="p-6 text-center transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-accent p-4 rounded-full">
                <Award className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 font-heading">Quality</h3>
            <p className="text-muted-foreground leading-relaxed font-body">
              Delivering premium biomass pellets with consistent standards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
