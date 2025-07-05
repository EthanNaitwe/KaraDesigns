import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = products.filter(product => 
    activeFilter === "all" || product.category === activeFilter
  );

  const filters = [
    { key: "all", label: "All" },
    { key: "bitengye", label: "Bitengye" },
    { key: "contemporary", label: "Contemporary" },
    { key: "accessories", label: "Accessories" },
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-sandy-brown/20 rounded animate-pulse mb-4"></div>
            <div className="h-6 bg-sandy-brown/20 rounded max-w-2xl mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-80 bg-sandy-brown/20 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const formatPrice = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  return (
    <section id="gallery" className="py-20 bg-cream relative">
      <div className="absolute inset-0 african-pattern"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-brown mb-6">Product Gallery</h2>
          <p className="font-lora text-lg text-dark-brown/80 max-w-3xl mx-auto">
            Explore our exquisite collection of African fashion and Bitengye designs, each piece carefully crafted to showcase the beauty of our cultural heritage.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                activeFilter === filter.key
                  ? "bg-rich-brown text-cream"
                  : "bg-cream text-dark-brown border border-rich-brown hover:bg-rich-brown hover:text-cream"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h4 className="font-lora font-semibold">{product.name}</h4>
                <p className="text-sm">{formatPrice(product.price)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-rich-brown hover:bg-dark-brown text-cream font-semibold py-3 px-8 rounded-lg transition duration-300">
            View Complete Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
