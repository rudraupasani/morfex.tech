import BenefitsPage from '@/components/BenefitsPage'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider'
import Navbar from '@/components/Navbar'
import QuestionsPage from '@/components/QuestionsPage'
import ServicesSection from '@/components/ServicesSection'
import Testimonials from '@/components/TestimonialSlider'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import React from 'react'

const page = () => {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <Navbar />
      <main id="main">
        <HeroSlider />
        <ServicesSection />
        <ProjectsShowcase />
        <BenefitsPage />
        <Testimonials />
        <QuestionsPage />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default page