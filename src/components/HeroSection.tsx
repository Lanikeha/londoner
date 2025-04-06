'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="/images/stock-chart-pattern.jpg" 
          alt="Stock Chart Background" 
          fill 
          priority
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Automated Trading Bot for <span className="text-blue-400">DAX</span> & <span className="text-blue-400">NASDAQ</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Our AI-powered platform analyzes market data in real-time, executing trades with precision and speed beyond human capability. Maximize returns and minimize risks.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
            <div className="pt-6 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image 
                      src={`/images/avatar-${i}.jpg`} 
                      alt={`User ${i}`} 
                      width={40} 
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-bold">500+</span> traders joined last week
              </p>
            </div>
          </div>
          <div className="relative w-full md:w-2/5 aspect-[4/3]">
            <Image
              src="/images/trading-dashboard.png"
              alt="TradeBotX Dashboard"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
          {[
            { label: 'Success Rate', value: '89%' },
            { label: 'Markets', value: 'DAX & NASDAQ' },
            { label: 'Avg. Return', value: '14.2%' },
            { label: 'Active Users', value: '12,000+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 