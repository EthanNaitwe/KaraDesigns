export default function HeroSection() {
  const scrollToCollections = () => {
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1594736797933-d0db1ac3c93f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')`
        }}
      ></div>
      <div className="absolute inset-0 bg-dark-brown/40"></div>
      <div className="absolute inset-0 african-pattern"></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Celebrating <span className="text-golden-rod">African</span> Heritage
        </h1>
        <p className="font-lora text-xl md:text-2xl mb-8 leading-relaxed">
          Exquisite Bitengye designs and authentic African fashion that tells stories of culture, tradition, and contemporary elegance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToCollections}
            className="bg-golden-rod hover:bg-warm-orange text-dark-brown font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Explore Collections
          </button>
          <button 
            onClick={scrollToAbout}
            className="border-2 border-cream text-cream hover:bg-cream hover:text-dark-brown font-semibold py-4 px-8 rounded-lg transition duration-300"
          >
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream animate-bounce">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}
