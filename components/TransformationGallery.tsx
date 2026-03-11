"use client";

import Image from 'next/image'

export default function TransformationGallery() {
  const items = [
    { name: 'Jordan', program: 'HIIT + PT', time: '16 weeks', image: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578078/site-images/fitness/13993019.jpg' },
    { name: 'Sofia', program: 'Yoga + Strength', time: '12 weeks', image: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578064/site-images/fitness/11385974.jpg' },
  ]
  return (
    <section id="transformations" className="bg-black py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6">
        {items.map((item) => (
          <div key={item.name} className="relative overflow-hidden rounded-xl">
            <Image src={item.image} alt={item.name} width={1200} height={800} className="h-80 w-full object-cover" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
              <p className="font-['Anton'] text-2xl uppercase">{item.name}</p>
              <p className="text-sm text-white/80">{item.program} • {item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
