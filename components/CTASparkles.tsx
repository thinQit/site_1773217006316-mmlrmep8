'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASparkles() {
  return (
    <section id="trial" className="bg-[#FF2E00] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <Sparkles className="mx-auto h-8 w-8" />
        <h2 className="mt-3 font-['Anton'] text-5xl uppercase">Claim Your 7-Day Free Trial</h2>
        <p className="mt-3 text-white/90">Unlimited classes • Trainer onboarding • Goal assessment</p>
        <Button asChild className="mt-6 bg-black uppercase text-white hover:bg-zinc-900"><Link href="#contact">Start Today</Link></Button>
      </div>
    </section>
  )
}
