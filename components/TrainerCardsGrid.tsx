"use client";

import TrainerCard from '@/components/TrainerCard'

export default function TrainerCardsGrid() {
  return (
    <section id="trainers" className="bg-black py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
        <TrainerCard name="Ray Coleman" specialties={['HIIT', 'Athletic Performance']} />
        <TrainerCard name="Mia Chen" specialties={['Yoga', 'Mobility']} imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg" unoptimized />
        <TrainerCard name="Alex Rivera" specialties={['Spinning', 'Endurance']} imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg" unoptimized />
      </div>
    </section>
  )
}
