"use client";

import MembershipTierCard from '@/components/MembershipTierCard'

export default function MembershipTiers() {
  return (
    <section id="pricing" className="bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MembershipTierCard name="Starter" price="$59/mo" features={['Open Gym Access', '1 Group Class/Week']} />
          <MembershipTierCard name="Peak" price="$99/mo" featured features={['Unlimited Classes', 'Open Gym Access', '1 PT Session/Month']} />
          <MembershipTierCard name="Elite" price="$179/mo" features={['Unlimited Classes', '4 PT Sessions/Month', 'Nutrition Check-ins']} />
        </div>
        <p className="mt-6 text-sm text-white/70">Drop-in class: $25 • Day pass: $20</p>
      </div>
    </section>
  )
}
