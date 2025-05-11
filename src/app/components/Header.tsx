import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-mothersday-rose">
          <a href="#home">Mom&apos;s Day</a>
        </div>
        
        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-mothersday-rose"
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </Button>
            
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4">
                <nav className="flex flex-col space-y-4">
                  <a href="#home" className="text-mothersday-rose hover:text-mothersday-pink" onClick={() => setIsMenuOpen(false)}>Home</a>
                  <a href="#gallery" className="text-mothersday-rose hover:text-mothersday-pink" onClick={() => setIsMenuOpen(false)}>Gallery</a>
                  <a href="#messages" className="text-mothersday-rose hover:text-mothersday-pink" onClick={() => setIsMenuOpen(false)}>Messages</a>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex space-x-8">
            <a href="#home" className="text-mothersday-rose hover:text-mothersday-pink font-medium">Home</a>
            <a href="#gallery" className="text-mothersday-rose hover:text-mothersday-pink font-medium">Gallery</a>
            <a href="#messages" className="text-mothersday-rose hover:text-mothersday-pink font-medium">Messages</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;