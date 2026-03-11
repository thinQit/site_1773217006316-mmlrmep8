"use client";

interface AngledSectionDividerProps {
  flip?: boolean
  color?: string
}

export default function AngledSectionDivider({ flip = false, color = '#111111' }: Partial<AngledSectionDividerProps>) {
  return (
    <svg className="block h-12 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <polygon fill={color} points={flip ? '0,0 1440,120 0,120' : '0,120 1440,0 1440,120'} />
    </svg>
  )
}
