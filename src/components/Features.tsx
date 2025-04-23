import React from "react";
import { Code, HardDrive, BarChart2, Lock, RefreshCw, Zap, Shield, Server } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-primary-600" />,
      title: "API Design & Documentation",
      description: "Create, share, and version beautiful API documentation automatically from your specs and tests.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary-600" />,
      title: "Request Builder",
      description: "Collaborate with your team to create and save API requests for later use with environment variables and scripts.",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-primary-600" />,
      title: "Automated Testing",
      description: "Create automated test suites and integrate them into your CI/CD pipeline for continuous validation.",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-primary-600" />,
      title: "Performance Analytics",
      description: "Track real-time metrics and gain insights into your API's performance over time.",
    },
    {
      icon: <Lock className="h-6 w-6 text-primary-600" />,
      title: "Advanced Security",
      description: "Implement authentication, authorization, and audit your APIs for security vulnerabilities.",
    },
    {
      icon: <HardDrive className="h-6 w-6 text-primary-600" />,
      title: "Mock Servers",
      description: "Create and deploy mock servers to simulate your APIs before they're fully implemented.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: "Governance & Compliance",
      description: "Ensure your APIs meet organizational standards and compliance requirements.",
    },
    {
      icon: <Server className="h-6 w-6 text-primary-600" />,
      title: "Multi-environment Support",
      description: "Seamlessly manage API configurations across development, staging, and production environments.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Everything You Need for API Development</h2>
          <p className="text-lg text-neutral-600">RequestLane provides a complete toolkit for designing, testing, and monitoring your APIs throughout their entire lifecycle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-50 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:bg-white border border-neutral-200 hover:border-primary-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-primary-50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">{feature.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
