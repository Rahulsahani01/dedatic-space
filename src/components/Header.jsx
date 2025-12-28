import React from 'react';
import Button from './ui/Button';
import illustrationImage from '../assets/Illustration.png';

const Header = () => {
  return (
    <header className="container px-6 mx-auto py-10 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section */}
      <div className='lg:w-1/2"'>
        <div className="w-full space-y-6">
          <h1 className="w-4/4 md:w-2/3 text-5xl md:text-6xl font-medium">
            Navigating the Digital Landscape with Smart IT Solutions
          </h1>
          <p className="w-5/6 md:w-4/9">
            We help businesses design, build, 
            and scale powerful digital products 
            through web development, mobile apps,
            cloud solutions, and enterprise software.
          </p>
          <Button
            text="Book a consultation"
            className="bg-black text-white w-full md:w-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className='lg:w-1/2"'>
        <div className="image">
          <img
            src={illustrationImage}
            alt="Illustration"
            className="w-full h-auto mt-12 md:mt"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
