import React from 'react';
import { Check, X } from 'lucide-react';
import Button from './ui/Button';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for individuals and small projects.",
      features: [
        { included: true, text: "Up to 5 API collections" },
        { included: true, text: "100 API requests per day" },
        { included: true, text: "Basic documentation" },
        { included: true, text: "Community support" },
        { included: false, text: "Team collaboration" },
        { included: false, text: "Custom environments" },
        { included: false, text: "API monitoring" },
        { included: false, text: "Advanced security features" }
      ],
      popular: false,
      buttonText: "Start Free"
    },
    {
      name: "Professional",
      price: 29,
      description: "Ideal for growing teams and professional projects.",
      features: [
        { included: true, text: "Unlimited API collections" },
        { included: true, text: "10,000 API requests per day" },
        { included: true, text: "Advanced documentation" },
        { included: true, text: "Priority email support" },
        { included: true, text: "Team collaboration (up to 10)" },
        { included: true, text: "Custom environments" },
        { included: true, text: "Basic API monitoring" },
        { included: false, text: "Advanced security features" }
      ],
      popular: true,
      buttonText: "Start 14-day Trial"
    },
    {
      name: "Enterprise",
      price: 99,
      description: "For large teams with demanding requirements.",
      features: [
        { included: true, text: "Unlimited API collections" },
        { included: true, text: "Unlimited API requests" },
        { included: true, text: "White-label documentation" },
        { included: true, text: "Dedicated support" },
        { included: true, text: "Unlimited team collaboration" },
        { included: true, text: "Advanced environments" },
        { included: true, text: "Real-time API monitoring" },
        { included: true, text: "Advanced security features" }
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-neutral-600">
            Choose the plan that fits your needs. All plans include core features with different limits and capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden border transition-all ${
                plan.popular 
                  ? 'border-primary-500 shadow-lg scale-105 md:scale-110 relative z-10' 
                  : 'border-neutral-200 hover:border-primary-200 hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary-600 text-white text-sm font-medium text-center py-1.5">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-neutral-900">${plan.price}</span>
                  <span className="text-neutral-600">/month</span>
                </div>
                <p className="text-neutral-600 mb-6">{plan.description}</p>

                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  fullWidth
                  className="mb-6"
                >
                  {plan.buttonText}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-success-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-neutral-700' : 'text-neutral-500'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-neutral-200 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Need a custom plan?</h3>
          <p className="text-neutral-600 mb-6">
            We offer custom plans for large teams and organizations with specific requirements. Contact our sales team to discuss your needs.
          </p>
          <Button variant="outline">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;