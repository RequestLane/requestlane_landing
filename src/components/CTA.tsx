import React from "react";
import { ArrowRight, Download } from "lucide-react";
import Button from "./ui/Button";

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-700 opacity-95"></div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Ready to Transform Your API Development Workflow?</h2>
          <p className="text-lg md:text-xl text-white opacity-90 mb-8 leading-relaxed">Join thousands of developers who are building better APIs faster with RequestLane. Start for free today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-neutral-100 border-0">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              <Download className="mr-2 h-5 w-5" />
              Download for Mac
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              <Download className="mr-2 h-5 w-5" />
              Windows
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              <Download className="mr-2 h-5 w-5" />
              Linux
            </Button>
          </div>
          <p className="mt-6 text-white opacity-80 text-sm">No credit card required. Free plan includes all core features.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
