'use client'

import { useEffect, useState } from 'react'

export default function StatsCounter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const i = setInterval(() => setCount((v) => (v < 1200 ? v + 24 : 1200)), 30)
    return () => clearInterval(i)
  }, [])
  return (
    <section className="bg-zinc-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center md:grid-cols-4 md:px-6">
        <div><p className="font-['Anton'] text-5xl text-[#FF2E00]">{count}+</p><p className="text-sm uppercase">Members Trained</p></div>
        <div><p className="font-['Anton'] text-5xl text-[#FF2E00]">45+</p><p className="text-sm uppercase">Classes Weekly</p></div>
        <div><p className="font-['Anton'] text-5xl text-[#FF2E00]">12</p><p className="text-sm uppercase">Expert Coaches</p></div>
        <div><p className="font-['Anton'] text-5xl text-[#FF2E00]">4.9</p><p className="text-sm uppercase">Avg Rating</p></div>
      </div>
    </section>
  )
}
