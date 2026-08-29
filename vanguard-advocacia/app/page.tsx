import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { PracticeAreas } from '@/components/practice-areas'
import { AuthorityStats } from '@/components/authority-stats'
import { Partners } from '@/components/partners'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <PracticeAreas />
        <AuthorityStats />
        <Partners />
      </main>
      <SiteFooter />
      <WhatsAppWidget />
    </div>
  )
}
