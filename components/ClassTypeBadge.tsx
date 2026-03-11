"use client";

import { cn } from '@/lib/utils'

interface ClassTypeBadgeProps {
  type?: string
}

export default function ClassTypeBadge({ type = 'HIIT' }: Partial<ClassTypeBadgeProps>) {
  const colors: Record<string, string> = {
    HIIT: 'bg-[#FF2E00] text-white',
    Yoga: 'bg-emerald-500 text-white',
    Spinning: 'bg-blue-500 text-white',
    Boxing: 'bg-amber-500 text-black',
  }

  return <span className={cn('rounded-md px-2 py-1 text-xs font-bold uppercase', colors[type] || 'bg-zinc-700 text-white')}>{type}</span>
}
