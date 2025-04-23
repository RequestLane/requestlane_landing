import React, { useState } from "react";
import { ArrowRight, BarChart3, Layers, AppWindow as Windows, Apple, Link as Linux, ChevronDown, Activity, Clock, Bell, Users } from "lucide-react";

const Hero: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeDropdown]);

  return (
    <section className="pt-20 lg:pt-32 pb-16 overflow-hidden relative min-h-screen lg:min-h-[800px] flex items-center">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Extra large subtle bubbles */}
        <div className="absolute -top-20 left-1/4 w-[28rem] h-[28rem] bg-gradient-to-br from-primary-100/10 to-primary-200/10 rounded-full blur-xl animate-subtle-drift" style={{ animationDuration: "30s" }}></div>
        <div className="absolute top-60 -right-20 w-[32rem] h-[32rem] bg-gradient-to-tr from-accent-100/10 to-accent-200/10 rounded-full blur-xl animate-subtle-drift" style={{ animationDuration: "35s", animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-20 w-[24rem] h-[24rem] bg-gradient-to-tl from-primary-100/5 to-accent-100/10 rounded-full blur-xl animate-subtle-drift" style={{ animationDuration: "40s", animationDelay: "5s" }}></div>
        <div className="absolute -bottom-40 right-1/3 w-[30rem] h-[30rem] bg-gradient-to-bl from-accent-100/10 to-primary-100/5 rounded-full blur-xl animate-subtle-drift" style={{ animationDuration: "38s", animationDelay: "3s" }}></div>

        {/* Large bubbles */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-primary-200/30 rounded-full opacity-40 animate-float" style={{ animationDuration: "15s" }}></div>
        <div className="absolute top-20 right-60 w-80 h-80 bg-gradient-to-tr from-accent-100/30 to-accent-200/30 rounded-full opacity-30 animate-float" style={{ animationDuration: "12s", animationDelay: "1s" }}></div>

        {/* Medium bubbles */}
        <div className="absolute bottom-40 -left-20 w-64 h-64 bg-gradient-to-br from-primary-50/30 to-primary-100/30 rounded-full opacity-30 animate-float" style={{ animationDuration: "10s", animationDelay: "2s" }}></div>
        <div className="absolute -bottom-20 right-40 w-72 h-72 bg-gradient-to-tr from-accent-50/30 to-accent-100/30 rounded-full opacity-30 animate-float" style={{ animationDuration: "13s", animationDelay: "1.5s" }}></div>

        {/* Small bubbles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full opacity-20 animate-float" style={{ animationDuration: "8s", animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-tr from-accent-100/20 to-primary-100/20 rounded-full opacity-20 animate-float" style={{ animationDuration: "9s", animationDelay: "2.5s" }}></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-to-bl from-primary-100/20 to-accent-100/20 rounded-full opacity-20 animate-float" style={{ animationDuration: "11s", animationDelay: "1.8s" }}></div>

        {/* Tiny bubbles */}
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-tr from-primary-200/20 to-accent-200/20 rounded-full opacity-20 animate-float" style={{ animationDuration: "7s", animationDelay: "1.2s" }}></div>
        <div className="absolute bottom-1/4 right-1/2 w-20 h-20 bg-gradient-to-bl from-accent-100/20 to-primary-100/20 rounded-full opacity-20 animate-float" style={{ animationDuration: "6s", animationDelay: "0.8s" }}></div>

        {/* Background glow effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-100/5 to-accent-100/5 animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-accent-100/5 to-primary-100/5 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-5 xl:col-span-4 order-2 lg:order-1">
            <div className="max-w-2xl lg:max-w-none">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 mb-6">Build, Test, and Monitor APIs with Confidence</h1>
              <p className="text-lg sm:text-xl text-neutral-600 mb-8 sm:mb-12 leading-relaxed">
                Download the app to start building with RequestLane API platform today.
                <span className="hidden sm:inline">
                  <br />
                  Alternatively, you can access RequestLane through your web browser.
                </span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                {/* Windows Download Button */}
                <div className="relative dropdown-container">
                  <button onClick={() => toggleDropdown("windows")} className="w-full max-w-[240px] bg-[#0D1117]/90 hover:bg-[#161B22] text-white rounded-2xl p-2.5 px-4 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg group">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <Windows className="h-5 w-5 text-[#4C6EF5] mr-3 flex-shrink-0" />
                        <div className="text-left">
                          <div className="text-[10px] text-gray-400">Download</div>
                          <div className="font-semibold text-sm">Windows</div>
                        </div>
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "windows" ? "rotate-180" : ""}`} />
                    </div>
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-rainbow-glow"></div>
                  </button>
                  {activeDropdown === "windows" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden z-20">
                      <a href="#" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 text-sm flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2" />
                        Win 64-bit
                      </a>
                      <a href="#" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 text-sm flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2" />
                        Win 32-bit
                      </a>
                    </div>
                  )}
                </div>

                {/* Mac Download Button */}
                <div className="relative dropdown-container">
                  <button onClick={() => toggleDropdown("mac")} className="w-full max-w-[240px] bg-[#0D1117]/90 hover:bg-[#161B22] text-white rounded-2xl p-2.5 px-4 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg group">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <Apple className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                        <div className="text-left">
                          <div className="text-[10px] text-gray-400">Download</div>
                          <div className="font-semibold text-sm">Mac</div>
                        </div>
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "mac" ? "rotate-180" : ""}`} />
                    </div>
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-rainbow-glow"></div>
                  </button>
                  {activeDropdown === "mac" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden z-20">
                      <a href="#" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 text-sm flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2" />
                        Intel Chip
                      </a>
                      <a href="#" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 text-sm flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2" />
                        Apple Silicon
                      </a>
                    </div>
                  )}
                </div>

                {/* Linux Download Button */}
                <div className="relative dropdown-container">
                  <button onClick={() => toggleDropdown("linux")} className="w-full max-w-[240px] bg-[#0D1117]/90 hover:bg-[#161B22] text-white rounded-2xl p-2.5 px-4 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg group">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <Linux className="h-5 w-5 text-[#FFD700] mr-3 flex-shrink-0" />
                        <div className="text-left">
                          <div className="text-[10px] text-gray-400">Download</div>
                          <div className="font-semibold text-sm">Linux</div>
                        </div>
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "linux" ? "rotate-180" : ""}`} />
                    </div>
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-rainbow-glow"></div>
                  </button>
                  {activeDropdown === "linux" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden z-20">
                      <a href="#" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 text-sm flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2" />
                        .deb (Ubuntu/Debian)
                      </a>
                      <a href="#" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 text-sm flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2" />
                        .rpm (Fedora/RHEL)
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center text-neutral-500 mt-8">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-medium text-neutral-600">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <p className="ml-4 text-sm">
                  <span className="font-medium text-primary-600">5,000+</span> developers trust RequestLane
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Dashboard Preview */}
          <div className="lg:col-span-7 xl:col-span-8 order-1 lg:order-2 -mx-4 sm:mx-0">
            <div className="relative bg-[#0D1117] rounded-xl shadow-2xl overflow-hidden border border-neutral-800 transform hover:scale-[1.02] transition-transform duration-300">
              {/* Dashboard Header */}
              <div className="bg-[#161B22] text-white p-3 sm:p-4 flex items-center justify-between border-b border-neutral-800">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <button className="p-1.5 sm:p-2 hover:bg-neutral-800 rounded-lg transition-colors">
                    <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-400" />
                  </button>
                  <button className="p-1.5 sm:p-2 hover:bg-neutral-800 rounded-lg transition-colors">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-400" />
                  </button>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-700 flex items-center justify-center">
                    <span className="text-sm font-medium">JD</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Navigation */}
              <div className="border-b border-neutral-800 p-2">
                <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
                  {[
                    { id: "overview", label: "Overview", icon: Activity },
                    { id: "monitoring", label: "Monitoring", icon: BarChart3 },
                    { id: "activity", label: "Activity", icon: Clock },
                  ].map((tab) => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab.id ? "bg-primary-600 text-white" : "text-neutral-400 hover:bg-neutral-800 hover:text-white"}`}>
                      <tab.icon className="h-4 w-4 mr-2" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-6 overflow-x-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 min-w-[600px]">
                  {[
                    { label: "Total APIs", value: "124", change: "+12%", color: "text-green-400" },
                    { label: "Active Users", value: "1,890", change: "+5%", color: "text-green-400" },
                    { label: "Error Rate", value: "0.12%", change: "-2%", color: "text-red-400" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-neutral-800/50 rounded-lg p-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="text-neutral-400 text-sm mb-1">{stat.label}</div>
                      <div className="text-white text-xl sm:text-2xl font-semibold mb-2">{stat.value}</div>
                      <div className={`text-sm ${stat.color}`}>{stat.change} this week</div>
                    </div>
                  ))}
                </div>

                {/* API Status Section */}
                <div className="bg-neutral-800/30 rounded-lg p-4 sm:p-6 mb-6 animate-fade-in min-w-[600px]" style={{ animationDelay: "0.3s" }}>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <h3 className="text-lg font-semibold text-white">API Status</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium whitespace-nowrap">All Systems Operational</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "Authentication API", uptime: "99.99%", latency: "45ms", requests: "2.3M" },
                      { name: "Payment API", uptime: "99.95%", latency: "89ms", requests: "1.1M" },
                      { name: "User API", uptime: "100%", latency: "32ms", requests: "4.7M" },
                    ].map((api, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg animate-slide-up hover:bg-neutral-700/50 transition-colors" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-white font-medium">{api.name}</span>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6 text-sm">
                          <span className="text-neutral-400 whitespace-nowrap">
                            Uptime: <span className="text-white">{api.uptime}</span>
                          </span>
                          <span className="text-neutral-400 whitespace-nowrap">
                            Latency: <span className="text-white">{api.latency}</span>
                          </span>
                          <span className="text-neutral-400 whitespace-nowrap">
                            Requests: <span className="text-white">{api.requests}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="animate-fade-in min-w-[600px]" style={{ animationDelay: "0.6s" }}>
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { action: "API Key Generated", time: "2 mins ago", status: "success", icon: Activity },
                      { action: "New Endpoint Added", time: "15 mins ago", status: "success", icon: Layers },
                      { action: "Documentation Updated", time: "1 hour ago", status: "info", icon: Clock },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-neutral-800/30 rounded-lg animate-slide-up hover:bg-neutral-700/30 transition-colors" style={{ animationDelay: `${index * 0.1 + 0.7}s` }}>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-neutral-700 flex items-center justify-center mr-3">
                            <activity.icon className="h-4 w-4 text-primary-400" />
                          </div>
                          <span className="text-white font-medium">{activity.action}</span>
                        </div>
                        <span className="text-sm text-neutral-400">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 -z-10 w-full h-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl animate-pulse-slow blur-xl"></div>
            <div className="absolute -top-8 -left-8 -z-10 w-full h-full bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-xl animate-pulse-slow blur-xl" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
