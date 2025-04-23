import React, { useState } from "react";
import { Table as Tabs, BarChart2, Code, GitBranch, RefreshCw, Play } from "lucide-react";

const ProductDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: <Code size={18} />,
      label: "API Design",
      content: {
        title: "Design APIs with Intuitive Tools",
        description: "Create and document your APIs with a user-friendly interface that generates OpenAPI specs automatically.",
        image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: ["Drag-and-drop API builder", "OpenAPI 3.0 and Swagger support", "Version control integration", "Interactive documentation"],
      },
    },
    {
      icon: <Play size={18} />,
      label: "Testing",
      content: {
        title: "Comprehensive API Testing",
        description: "Validate your APIs across environments with powerful testing tools and automated test suites.",
        image: "https://images.pexels.com/photos/7088020/pexels-photo-7088020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: ["Automated test suites", "Environment variables", "Pre-request scripts", "CI/CD integration"],
      },
    },
    {
      icon: <BarChart2 size={18} />,
      label: "Monitoring",
      content: {
        title: "Real-time API Monitoring",
        description: "Track performance, detect issues, and get alerted when your APIs aren't functioning as expected.",
        image: "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: ["Performance dashboards", "Uptime monitoring", "Error tracking and alerts", "Historical analytics"],
      },
    },
    {
      icon: <GitBranch size={18} />,
      label: "Workflows",
      content: {
        title: "Streamline API Workflows",
        description: "Connect your API development with other tools and automate workflows for maximum efficiency.",
        image: "https://images.pexels.com/photos/7654096/pexels-photo-7654096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: ["API workflow automation", "Custom integration hooks", "Event-based triggers", "Team collaboration tools"],
      },
    },
  ];

  return (
    <section id="demo" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">See RequestLane in Action</h2>
          <p className="text-lg text-neutral-600">Discover how RequestLane can transform your API development workflow and improve collaboration across teams.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b border-neutral-200 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button key={index} onClick={() => setActiveTab(index)} className={`flex items-center py-4 px-6 text-sm font-medium transition-colors ${activeTab === index ? "text-primary-600 border-b-2 border-primary-600 bg-primary-50/50" : "text-neutral-600 hover:text-primary-600 hover:bg-neutral-50"}`}>
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-1">
            {tabs.map((tab, index) => (
              <div key={index} className={`${activeTab === index ? "block" : "hidden"}`}>
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="order-2 md:order-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">{tab.content.title}</h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">{tab.content.description}</p>
                    <ul className="space-y-3">
                      {tab.content.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                          </div>
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-1 md:order-2 animate-fade-in">
                    <div className="bg-neutral-100 rounded-lg overflow-hidden relative aspect-[4/3]">
                      <img src={tab.content.image} alt={tab.content.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary-800/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
