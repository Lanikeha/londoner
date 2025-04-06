'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-blue-200">
              Join thousands of traders who have already automated their DAX and NASDAQ trading strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Start Your Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-blue-200">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/trading-success.jpg"
                alt="Trading Success"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-[280px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-2xl">↗</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-white">97%</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Performance Rate</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                "This bot has consistently outperformed my manual trading strategies by 42%."
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-blue-800">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {['TechCrunch', 'Forbes', 'Bloomberg', 'Business Insider', 'CNBC'].map((logo, i) => (
              <div key={i} className="flex items-center justify-center">
                <p className="text-xl font-bold text-blue-300 opacity-80">{logo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 