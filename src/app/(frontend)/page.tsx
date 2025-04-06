import { Metadata } from 'next'
import React from 'react'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { PricingSection } from '@/components/PricingSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { CTASection } from '@/components/CTASection'

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'TradeBotX - Automated Trading Bot for DAX and NASDAQ',
  description: 'Advanced algorithmic trading bot for DAX and NASDAQ markets. Maximize your returns with AI-driven market analysis and automated trading strategies.',
}
