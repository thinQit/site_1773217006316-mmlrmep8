'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'

export default function AceternityHeroAurora() {
  return (
    <AuroraBackground className="min-h-[78vh]">
      <section className="mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-24 md:px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2E00]">Austin, Texas</p>
        <h1 className="max-w-4xl font-['Anton'] text-5xl uppercase leading-[0.95] text-white md:text-7xl">Train Hard. Rise Higher.</h1>
        <p className="mt-4 max-w-xl text-white/80">Iron Peak Fitness delivers elite personal training, high-energy group classes, and real transformations.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-[#FF2E00] uppercase text-white hover:bg-[#e12800]"><Link href="#trial">Start Free Trial</Link></Button>
          <Button asChild variant="outline" className="border-white/30 uppercase text-white hover:bg-white/10"><Link href="#classes">View Classes</Link></Button>
        </div>
        <div className="mt-10 rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white/90">Open Daily • Mon–Fri 5AM–10PM • Sat–Sun 7AM–8PM</div>
      </section>
    </AuroraBackground>
  )
}
