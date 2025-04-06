'use client'

import React from 'react'
import Image from 'next/image'

export function FeaturesSection() {
  const features = [
    {
      title: 'Real-time Market Analysis',
      description: 'Advanced algorithms analyze DAX and NASDAQ market data in real-time, detecting patterns and opportunities.',
      icon: '/icons/chart-line.svg',
    },
    {
      title: 'Automated Trading Execution',
      description: 'Execute trades automatically with precision timing based on pre-set parameters and risk management rules.',
      icon: '/icons/robot.svg',
    },
    {
      title: 'Risk Management',
      description: 'Sophisticated stop-loss mechanisms and position sizing to protect your capital in volatile markets.',
      icon: '/icons/shield.svg',
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed reports and analytics dashboard to track your trading performance and optimize strategies.',
      icon: '/icons/analytics.svg',
    },
    {
      title: 'Multi-Strategy Approach',
      description: 'Choose from multiple trading strategies or create custom ones tailored to your risk tolerance.',
      icon: '/icons/strategy.svg',
    },
    {
      title: 'Cloud-Based Platform',
      description: '24/7 availability with no need for dedicated hardware. Trade from anywhere on any device.',
      icon: '/icons/cloud.svg',
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Trading Features</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Our automated trading platform is packed with powerful features designed to give you an edge in DAX and NASDAQ markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Image 
                  src={feature.icon} 
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-900 text-white rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Algorithmic Precision</h3>
              <p className="mb-6">
                Our algorithms analyze thousands of data points per second, identifying market movements that human traders might miss. This precision translates to better entry and exit points.
              </p>
              <ul className="space-y-2">
                {['Pattern recognition', 'Sentiment analysis', 'Technical indicators', 'Market correlation'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-blue-300">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <Image
                src="/images/algorithm-visualization.jpg"
                alt="Trading Algorithm Visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 