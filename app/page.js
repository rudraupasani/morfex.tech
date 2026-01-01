import BenefitsPage from '@/components/BenefitsPage'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider'
import Navbar from '@/components/Navbar'
import QuestionsPage from '@/components/QuestionsPage'
import ServicesSection from '@/components/ServicesSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <ServicesSection />
      <BenefitsPage />
      <QuestionsPage />
      <CTASection />
      <Footer />
    </div>
  )
}

export default page