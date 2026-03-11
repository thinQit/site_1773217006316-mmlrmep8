'use client'

import { useMemo, useState } from 'react'
import { Card } from '@/components/ui/card'
import ClassTypeBadge from '@/components/ClassTypeBadge'

export default function ClassSchedule() {
  const [filter, setFilter] = useState('All')
  const classes = [
    { day: 'Mon', time: '6:00 AM', type: 'HIIT', coach: 'Coach Ray', spots: 4, intensity: 'High' },
    { day: 'Tue', time: '7:00 AM', type: 'Yoga', coach: 'Coach Mia', spots: 8, intensity: 'Low' },
    { day: 'Wed', time: '6:30 PM', type: 'Spinning', coach: 'Coach Alex', spots: 2, intensity: 'Medium' },
    { day: 'Thu', time: '7:30 PM', type: 'Boxing', coach: 'Coach Dana', spots: 6, intensity: 'High' },
  ]
  const filtered = useMemo(() => (filter === 'All' ? classes : classes.filter((c) => c.type === filter)), [filter])

  return (
    <section id="classes" className="bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6 flex flex-wrap gap-2">{['All', 'HIIT', 'Yoga', 'Spinning', 'Boxing'].map((f) => <button key={f} onClick={() => setFilter(f)} className="rounded-md border border-white/20 px-3 py-1 text-xs font-semibold uppercase text-white hover:border-[#FF2E00]">{f}</button>)}</div>
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((item) => (
            <Card key={item.day + item.time} className="border-white/10 bg-black p-4 text-white">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{item.day} • {item.time}</p>
                <ClassTypeBadge type={item.type} />
              </div>
              <p className="mt-2 text-sm text-white/80">{item.coach} • Intensity: {item.intensity}</p>
              <p className="mt-1 text-xs text-[#FF2E00]">{item.spots} spots left</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
