import { useState } from "react";
import karaLogo from "@assets/image_1751724405824.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-cream/98 backdrop-blur-md fixed w-full z-50 border-b border-sandy-brown/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src={karaLogo} alt="Kara Designs Logo" className="h-12 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-dark-brown hover:text-rich-brown transition duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('collections')} 
              className="text-dark-brown hover:text-rich-brown transition duration-300 font-medium"
            >
              Collections
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-dark-brown hover:text-rich-brown transition duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-dark-brown hover:text-rich-brown transition duration-300 font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-dark-brown hover:text-rich-brown transition duration-300 font-medium"
            >
              Contact
            </button>
            <a 
              href="https://www.instagram.com/karadesignsuganda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-orange hover:text-golden-rod transition duration-300"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-brown hover:text-rich-brown"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-cream border-t border-sandy-brown/20">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block px-3 py-2 text-dark-brown hover:text-rich-brown transition duration-300 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('collections')} 
              className="block px-3 py-2 text-dark-brown hover:text-rich-brown transition duration-300 w-full text-left"
            >
              Collections
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block px-3 py-2 text-dark-brown hover:text-rich-brown transition duration-300 w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block px-3 py-2 text-dark-brown hover:text-rich-brown transition duration-300 w-full text-left"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block px-3 py-2 text-dark-brown hover:text-rich-brown transition duration-300 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
