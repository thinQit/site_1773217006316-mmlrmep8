"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface TrainerCardProps {
  name?: string
  imageSrc?: string
  specialties?: string[]
  certifications?: string[]
  signatureSession?: string
}

export default function TrainerCard({
  name = 'Coach Name',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg',
  specialties = ['Strength'],
  certifications = ['NASM-CPT'],
  signatureSession = 'Power Circuit',
}: Partial<TrainerCardProps>) {
  return (
    <Card className="overflow-hidden border-white/10 bg-black text-white">
      <Image src={imageSrc} alt={name} width={600} height={400} className="h-56 w-full object-cover" unoptimized />
      <div className="p-4">
        <h3 className="font-['Anton'] text-2xl uppercase">{name}</h3>
        <p className="mt-2 text-sm text-white/80">Specialties: {specialties.join(', ')}</p>
        <p className="mt-1 text-sm text-white/70">Certifications: {certifications.join(', ')}</p>
        <p className="mt-3 text-xs uppercase text-[#FF2E00]">Signature: {signatureSession}</p>
      </div>
    </Card>
  )
}
