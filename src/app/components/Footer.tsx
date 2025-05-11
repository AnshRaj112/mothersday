import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mothersday-rose/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <Heart className="h-5 w-5 text-mothersday-rose mr-2" />
            <p className="font-serif text-mothersday-rose text-lg">Mom&apos;s Day</p>
          </div>
          
          <p className="text-center text-gray-700 mb-4">
            Created with love for the most important woman in my life
          </p>
          
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Mother&apos;s Day Tribute
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;