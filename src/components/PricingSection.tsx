'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      price: '$79',
      period: 'per month',
      description: 'Perfect for beginners looking to automate their trading.',
      features: [
        'DAX Trading Bot',
        'Basic Risk Management',
        'Market Hours Trading',
        'Email Support',
        '1 Trading Strategy',
      ],
      cta: 'Start Free Trial',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$149',
      period: 'per month',
      description: 'Our most popular plan for serious traders.',
      features: [
        'DAX & NASDAQ Trading Bots',
        'Advanced Risk Management',
        'Extended Hours Trading',
        'Priority Support',
        '5 Trading Strategies',
        'Performance Analytics',
        'Custom Alerts',
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: 'per month',
      description: 'Full-featured solution for professional traders.',
      features: [
        'All Markets Access',
        'Custom Strategy Development',
        '24/7 Trading Capability',
        'Dedicated Account Manager',
        'Unlimited Trading Strategies',
        'API Access',
        'White Label Options',
        'Multi-account Management',
      ],
      cta: 'Contact Sales',
      highlight: false,
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Choose the plan that best fits your trading needs. All plans come with a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border ${
                plan.highlight 
                  ? 'border-blue-500 shadow-xl shadow-blue-100 dark:shadow-blue-900/20' 
                  : 'border-gray-200 dark:border-gray-700 shadow-lg'
              }`}
            >
              {plan.highlight && (
                <div className="bg-blue-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>
                
                <Button 
                  className={`w-full ${
                    plan.highlight 
                      ? 'bg-blue-500 hover:bg-blue-600' 
                      : 'bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </Button>
                
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Frequently Asked Questions</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Find answers to common questions about our trading bot platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'How does the 14-day free trial work?',
                a: 'You can try any plan risk-free for 14 days. No credit card required until you decide to continue.'
              },
              {
                q: 'Can I change plans later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.'
              },
              {
                q: 'Is there a minimum contract period?',
                a: 'No, all our plans are month-to-month with no long-term commitment required.'
              },
              {
                q: 'Do you offer refunds?',
                a: "We offer a 30-day money-back guarantee if you're not satisfied with our service."
              }
            ].map((faq, i) => (
              <div key={i} className="mb-4">
                <h4 className="font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 