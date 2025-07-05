export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Kara Designs Studio Workspace" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-golden-rod rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-warm-orange rounded-full opacity-30"></div>
          </div>

          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-brown mb-6">Our Story</h2>
            <p className="font-lora text-lg text-dark-brown/80 mb-6 leading-relaxed">
              Kara Designs was born from a passion for celebrating African heritage through contemporary fashion. We specialize in authentic Bitengye designs that honor traditional craftsmanship while embracing modern aesthetics.
            </p>
            <p className="font-open-sans text-dark-brown/70 mb-6">
              Each piece tells a story of cultural pride, meticulous craftsmanship, and the vibrant spirit of African creativity. Our mission is to bridge the gap between tradition and modernity, creating timeless pieces that celebrate our rich heritage.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-cream rounded-lg">
                <div className="text-3xl font-bold text-rich-brown font-playfair">500+</div>
                <div className="text-sm text-dark-brown/70 font-open-sans">Unique Designs</div>
              </div>
              <div className="text-center p-6 bg-cream rounded-lg">
                <div className="text-3xl font-bold text-rich-brown font-playfair">10+</div>
                <div className="text-sm text-dark-brown/70 font-open-sans">Years Experience</div>
              </div>
            </div>

            <button className="bg-warm-orange hover:bg-golden-rod text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
