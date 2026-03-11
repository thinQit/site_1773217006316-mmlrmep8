"use client";

import Link from 'next/link'
import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MembershipTierCardProps {
  name?: string
  price?: string
  features?: string[]
  featured?: boolean
}

export default function MembershipTierCard({
  name = 'Starter',
  price = '$59/mo',
  features = ['Gym Access', '1 Class/Week'],
  featured = false,
}: Partial<MembershipTierCardProps>) {
  return (
    <Card className={cn('p-6 text-white', featured ? 'border-[#FF2E00] bg-zinc-950' : 'border-white/10 bg-black')}>
      <h3 className="font-['Anton'] text-3xl uppercase">{name}</h3>
      <p className="mt-2 text-2xl font-bold">{price}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-[#FF2E00]" /> {f}</li>)}
      </ul>
      <Button asChild className="mt-6 w-full bg-[#FF2E00] uppercase text-white hover:bg-[#e12800]"><Link href="#trial">Join Now</Link></Button>
    </Card>
  )
}
