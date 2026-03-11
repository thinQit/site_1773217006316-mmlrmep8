"use client";

import Link from 'next/link'
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react'

interface FooterProps {
  businessName?: string
}

export default function Footer({ businessName = 'Iron Peak Fitness' }: Partial<FooterProps>) {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-['Anton'] text-2xl uppercase">{businessName}</h3>
          <p className="mt-3 text-sm text-white/75">Built for Austin athletes. Strength, stamina, confidence.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#FF2E00]" /> 2101 S Lamar Blvd, Austin, TX</p>
          <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#FF2E00]" /> Mon–Fri 5AM–10PM | Sat–Sun 7AM–8PM</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#FF2E00]" /> (512) 555-0199</p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#FF2E00]" /> hello@ironpeakfitness.com</p>
        </div>
        <div>
          <h4 className="font-semibold uppercase">Quick Links</h4>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="#classes" className="block hover:text-[#FF2E00]">Classes</Link>
            <Link href="#trainers" className="block hover:text-[#FF2E00]">Trainers</Link>
            <Link href="#pricing" className="block hover:text-[#FF2E00]">Pricing</Link>
            <Link href="#contact" className="block hover:text-[#FF2E00]">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold uppercase">Follow</h4>
          <div className="mt-3 flex gap-3">
            <Link href="#" className="rounded-md border border-white/20 p-2 hover:border-[#FF2E00]"><Instagram className="h-4 w-4" /></Link>
            <Link href="#" className="rounded-md border border-white/20 p-2 hover:border-[#FF2E00]"><Facebook className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">© 2026 {businessName}. All rights reserved.</div>
    </footer>
  )
}
