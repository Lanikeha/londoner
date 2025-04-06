'use client'

import React from 'react'
import Image from 'next/image'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "TradeBotX has completely changed my trading game. The automated strategies for DAX have delivered consistent returns even in volatile markets.",
      author: "Sarah Johnson",
      title: "Professional Trader",
      avatar: "/images/testimonial-1.jpg"
    },
    {
      quote: "As someone who doesn't have time to watch markets all day, this bot has been incredible. The NASDAQ strategy alone has outperformed my previous returns by 34%.",
      author: "Michael Chen",
      title: "Part-time Investor",
      avatar: "/images/testimonial-2.jpg"
    },
    {
      quote: "The risk management features are what sold me. I can sleep at night knowing my investments have proper stop-losses and take-profit levels automatically set.",
      author: "David Müller",
      title: "Hedge Fund Manager",
      avatar: "/images/testimonial-3.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Traders Say</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Hear from traders who have transformed their market approach with our automated trading solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg relative"
            >
              <div className="absolute -top-4 left-8 text-blue-500 text-6xl opacity-30">"</div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="relative h-40 w-40">
                <Image
                  src="/images/trading-results.jpg"
                  alt="Trading Results"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-10">
              <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our automated trading system has been tested across multiple market conditions, with a consistent track record of success.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Win Rate', value: '72%' },
                  { label: 'Avg. Profit/Trade', value: '1.8%' },
                  { label: 'Max Drawdown', value: '12%' },
                  { label: 'Recovery Rate', value: '91%' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-2 bg-gray-100 dark:bg-gray-600 rounded">
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 