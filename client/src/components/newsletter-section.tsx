import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      const message = error.message.includes("already subscribed") 
        ? "This email is already subscribed to our newsletter."
        : "Failed to subscribe. Please try again.";
      
      toast({
        title: "Subscription failed",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      newsletterMutation.mutate(email.trim());
    }
  };

  return (
    <section className="py-16 bg-rich-brown">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-4">Stay Connected</h3>
        <p className="font-lora text-lg text-cream/90 mb-8">
          Subscribe to our newsletter for the latest collections, cultural stories, and exclusive access to new designs.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address" 
            required
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-golden-rod text-dark-brown"
          />
          <button 
            type="submit" 
            disabled={newsletterMutation.isPending}
            className="bg-golden-rod hover:bg-warm-orange text-dark-brown font-semibold py-3 px-6 rounded-lg transition duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
