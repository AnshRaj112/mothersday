import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// These would be replaced with actual images of the user's mother
const motherPhotos = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dt45pu5mx/image/upload/v1746972015/489ad019-7908-4292-84b5-924d7c7500e9.png',
    alt: 'Mother with laptop',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dt45pu5mx/image/upload/v1746971995/2c9a7924-3f77-44e0-b9d5-68ebe1bf03ce.png',
    alt: 'Mother on bed with laptop',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dt45pu5mx/image/upload/v1746971947/bdbef806-584f-422a-8287-086d99cecb5d.png',
    alt: 'Mother at work',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dt45pu5mx/image/upload/v1746971926/678cbb7b-dfe6-4b8d-ae18-24ac32d2f14c.png',
    alt: 'Mother with laptop',
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/dt45pu5mx/image/upload/v1746971591/DSC_3071_1_x6wbyy.jpg',
    alt: 'Mother on bed with laptop',
  }
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | typeof motherPhotos[0]>(null);
  
  return (
    <section id="gallery" className="py-20 bg-mothersday-cream/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-mothersday-rose mb-4">Beautiful Memories</h2>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Each photo captures a moment that speaks to your incredible journey as a mother - moments of joy, love, and the countless ways you&apos;ve shaped our lives.
        </p>
        
        <div className="gallery-grid">
          {motherPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p className="font-serif text-lg">{photo.caption}</p>
              </div> */}
            </div>
          ))}
        </div>
        
        <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl">
            {selectedPhoto && (
              <div>
                <div className="relative aspect-video">
                  <img 
                    src={selectedPhoto.url}
                    alt={selectedPhoto.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;