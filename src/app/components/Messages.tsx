import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const messages = [
  {
    id: 1,
    message: "Mom, your love is a beacon that guides me through the darkest nights. Your selfless care and endless patience have shaped the person I am today. Thank you for always being there, no matter what.",
    author: "With all my love"
  },
  {
    id: 2,
    message: "The strength you've shown through every challenge inspires me daily. You taught me to face life with courage and kindness. I am forever grateful for your wisdom and your unconditional love.",
    author: "Your biggest admirer"
  },
  {
    id: 3,
    message: "Every sacrifice you made, every late night you endured, every worry you carried - I see it all now. Your love has been the greatest gift of my life. Happy Mother's Day to the most amazing woman I know.",
    author: "Forever thankful"
  },
];

const Messages = () => {
  return (
    <section id="messages" className="py-20 bg-gradient-to-b from-white to-mothersday-lavender/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-mothersday-rose mx-auto mb-4 animate-float" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mothersday-rose mb-4">
            From the Heart
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Words may never be enough to express how much you mean to me, but here are a few messages that come straight from my heart to yours.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {messages.map((item, index) => (
            <div 
              key={item.id} 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <Card className="h-full bg-white/80 backdrop-blur border-mothersday-lavender hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    &ldquo;{item.message}&rdquo;
                  </blockquote>
                  <p className="text-right font-serif text-mothersday-rose">— {item.author}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;