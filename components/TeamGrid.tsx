"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
}

interface TeamGridProps {
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

export default function TeamGrid({
  headline = "Meet the Coaches",
  subheadline = "Certified trainers who push you safely toward measurable results.",
  members = [],
}: Partial<TeamGridProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member, i) => (
            <Card key={i} className="overflow-hidden rounded-xl border border-border bg-card text-center card-hover">
              {member.imageUrl && (
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={600}
                    height={600}
                    unoptimized
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-foreground uppercase">{member.name}</h3>
                <p className="text-sm text-primary uppercase">{member.title}</p>
                {member.bio && <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
