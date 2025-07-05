import karaLogo from "@assets/image_1751724405824.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-brown text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src={karaLogo} alt="Kara Designs Logo" className="h-16 w-auto mb-4" />
            <p className="font-open-sans text-cream/80 mb-4 max-w-md">
              Celebrating African heritage through authentic Bitengye designs and contemporary fashion that honors tradition while embracing modernity.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/karadesignsuganda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/20 rounded-full flex items-center justify-center hover:bg-golden-rod hover:text-dark-brown transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-cream/20 rounded-full flex items-center justify-center hover:bg-golden-rod hover:text-dark-brown transition duration-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-cream/20 rounded-full flex items-center justify-center hover:bg-golden-rod hover:text-dark-brown transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-lora font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-open-sans">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-cream/80 hover:text-golden-rod transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('collections')} 
                  className="text-cream/80 hover:text-golden-rod transition duration-300"
                >
                  Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-cream/80 hover:text-golden-rod transition duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')} 
                  className="text-cream/80 hover:text-golden-rod transition duration-300"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-cream/80 hover:text-golden-rod transition duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-lora font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 font-open-sans text-cream/80">
              <li>Kampala, Uganda</li>
              <li>+256 XXX XXXXXX</li>
              <li>info@karadesigns.ug</li>
              <li>@karadesignsuganda</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center font-open-sans text-cream/60">
          <p>&copy; 2024 Kara Designs. All rights reserved. | Crafted with love for African heritage.</p>
        </div>
      </div>
    </footer>
  );
}
