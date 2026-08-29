import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { Methodology } from "@/components/methodology"
import { AboutArchitect } from "@/components/about-architect"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedProjects />
        <Methodology />
        <AboutArchitect />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
