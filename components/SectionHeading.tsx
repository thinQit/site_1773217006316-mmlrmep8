"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface SectionHeadingProps {
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function SectionHeading({
  title = 'Section Title',
  subtitle = '',
  ctaLabel = '',
  ctaHref = '#',
}: Partial<SectionHeadingProps>) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 className="font-['Anton'] text-4xl uppercase text-white md:text-5xl">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-white/75">{subtitle}</p> : null}
      </div>
      {ctaLabel ? <Button asChild className="bg-[#FF2E00] uppercase text-white hover:bg-[#e12800]"><Link href={ctaHref}>{ctaLabel}</Link></Button> : null}
    </div>
  )
}
