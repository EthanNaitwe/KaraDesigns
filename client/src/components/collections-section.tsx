import { useQuery } from "@tanstack/react-query";
import type { Collection } from "@shared/schema";

export default function CollectionsSection() {
  const { data: collections = [], isLoading } = useQuery<Collection[]>({
    queryKey: ["/api/collections/featured"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-sandy-brown/20 rounded animate-pulse mb-4"></div>
            <div className="h-6 bg-sandy-brown/20 rounded max-w-2xl mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-sandy-brown/20 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="collections" className="py-20 bg-cream relative">
      <div className="absolute inset-0 african-pattern"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-brown mb-6">Featured Collections</h2>
          <p className="font-lora text-lg text-dark-brown/80 max-w-3xl mx-auto">
            Discover our signature Bitengye designs and contemporary African fashion pieces, each crafted with meticulous attention to cultural authenticity and modern aesthetics.
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {collections.map((collection) => (
            <div key={collection.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <img 
                src={collection.imageUrl} 
                alt={collection.name} 
                className="w-full h-96 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">{collection.name}</h3>
                <p className="font-open-sans text-sm opacity-90">{collection.description}</p>
                <button className="mt-3 bg-golden-rod text-dark-brown px-4 py-2 rounded-lg font-semibold text-sm hover:bg-warm-orange transition duration-300">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-rich-brown hover:bg-dark-brown text-cream font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}
