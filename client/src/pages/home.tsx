import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CollectionsSection from "@/components/collections-section";
import AboutSection from "@/components/about-section";
import GallerySection from "@/components/gallery-section";
import InstagramSection from "@/components/instagram-section";
import ContactSection from "@/components/contact-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <HeroSection />
      <CollectionsSection />
      <AboutSection />
      <GallerySection />
      <InstagramSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
