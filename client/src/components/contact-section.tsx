import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-dark-brown text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="font-lora text-lg mb-8 opacity-90">
              Ready to explore our collections or have a custom design in mind? We'd love to hear from you and bring your African fashion vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-golden-rod rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-dark-brown"></i>
                </div>
                <div>
                  <h4 className="font-lora font-semibold">Location</h4>
                  <p className="text-cream/80">Kampala, Uganda</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-golden-rod rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-dark-brown"></i>
                </div>
                <div>
                  <h4 className="font-lora font-semibold">Phone</h4>
                  <p className="text-cream/80">+256 XXX XXXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-golden-rod rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-dark-brown"></i>
                </div>
                <div>
                  <h4 className="font-lora font-semibold">Email</h4>
                  <p className="text-cream/80">info@karadesigns.ug</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-golden-rod rounded-full flex items-center justify-center">
                  <i className="fab fa-instagram text-dark-brown"></i>
                </div>
                <div>
                  <h4 className="font-lora font-semibold">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/karadesignsuganda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-warm-orange hover:text-golden-rod transition duration-300"
                  >
                    @karadesignsuganda
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream/10 p-8 rounded-xl">
            <h3 className="font-playfair text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cream/20 border border-cream/30 rounded-lg focus:outline-none focus:border-golden-rod text-cream placeholder-cream/60" 
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cream/20 border border-cream/30 rounded-lg focus:outline-none focus:border-golden-rod text-cream placeholder-cream/60" 
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cream/20 border border-cream/30 rounded-lg focus:outline-none focus:border-golden-rod text-cream placeholder-cream/60" 
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cream/20 border border-cream/30 rounded-lg focus:outline-none focus:border-golden-rod text-cream placeholder-cream/60" 
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5} 
                  className="w-full px-4 py-3 bg-cream/20 border border-cream/30 rounded-lg focus:outline-none focus:border-golden-rod text-cream placeholder-cream/60 resize-none" 
                  placeholder="Tell us about your fashion vision..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-golden-rod hover:bg-warm-orange text-dark-brown font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
