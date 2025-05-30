import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "RequestLane has completely transformed our API development workflow. What used to take us weeks now takes days, and our team collaboration has never been better.",
      author: "Sarah Chen",
      role: "CTO, TechStream",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
    },
    {
      quote: "The monitoring features in RequestLane saved us countless hours of debugging. We caught critical issues before they impacted our users, which is invaluable for our business.",
      author: "Michael Rodriguez",
      role: "Lead Developer, DataFlow",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
    },
    {
      quote: "The API documentation generated by RequestLane is the best I've seen. It's clear, interactive, and always in sync with our actual API implementation.",
      author: "Aisha Johnson",
      role: "API Architect, CloudWorks",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
    },
  ];

  const logos = [
    { name: "Acme Inc", letter: "A" },
    { name: "TechCorp", letter: "T" },
    { name: "Innovate LLC", letter: "I" },
    { name: "Digital Forge", letter: "D" },
    { name: "CloudWorks", letter: "C" },
    { name: "Horizon Tech", letter: "H" },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Trusted by Developers Worldwide</h2>
          <p className="text-lg text-neutral-600">See what engineering teams are saying about how RequestLane has improved their API development process.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-neutral-50 rounded-xl p-8 border border-neutral-200 hover:shadow-md transition-all relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <Quote className="absolute top-6 right-6 h-8 w-8 text-neutral-200" />
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-neutral-300"}`} />
                ))}
              </div>
              <p className="text-neutral-700 mb-6 relative z-10 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{testimonial.author}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-center text-neutral-500 mb-8 text-sm uppercase tracking-wider font-medium">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-neutral-200 rounded-md flex items-center justify-center mr-2">
                  <span className="text-xl font-bold text-neutral-700">{logo.letter}</span>
                </div>
                <span className="text-neutral-700 font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
