export default function InstagramSection() {
  const instagramImages = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0db1ac3c93f?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-brown mb-6">Follow Our Journey</h2>
          <p className="font-lora text-lg text-dark-brown/80 max-w-2xl mx-auto mb-6">
            Stay connected with Kara Designs on Instagram to see our latest creations, behind-the-scenes moments, and the stories behind each piece.
          </p>
          <a 
            href="https://www.instagram.com/karadesignsuganda" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-warm-orange hover:text-golden-rod font-semibold transition duration-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
            @karadesignsuganda
          </a>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {instagramImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img 
                src={image} 
                alt={`Instagram post ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/karadesignsuganda" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-warm-orange to-golden-rod text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
