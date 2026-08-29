import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { Differentials } from '@/components/differentials'
import { BeforeAfterSlider } from '@/components/before-after-slider'
import { PatientReviews } from '@/components/patient-reviews'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <Differentials />
        <BeforeAfterSlider />
        <PatientReviews />
      </main>
      <SiteFooter />
      <WhatsAppWidget />
    </>
  )
}
