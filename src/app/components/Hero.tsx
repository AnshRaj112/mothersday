import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-mothersday-rose mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Happy Mother&apos;s Day
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              To the woman who gave me everything, who loves unconditionally, and whose strength inspires me every day. This celebration is dedicated to you, mom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button className="bg-mothersday-rose hover:bg-mothersday-pink text-white">
                <a href="#gallery">See Photos</a>
              </Button>
              <Button variant="outline" className="border-mothersday-rose text-mothersday-rose hover:bg-mothersday-lavender/10">
                <a href="#messages">Read Messages</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="absolute top-0 left-0 w-full h-full bg-mothersday-lavender/30 z-10 rounded-2xl"></div>
              <img 
                src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1746971591/DSC_3071_1_x6wbyy.jpg"
                alt="Mother hugging son" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;