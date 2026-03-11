"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Dumbbell, HeartPulse, Shield, Sparkles, Timer, type LucideIcon, Flame, Clock, Users, User, BarChart3, Database, Scale } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, LucideIcon> = { Flame, Clock, Users, User, BarChart3, Database, Scale, 
  Activity,
  Dumbbell,
  HeartPulse,
  Shield,
  Sparkles,
  Timer,
};

export default function FeaturesGrid({
  badge = "Why Train With Us",
  headline = "Built for Real Fitness Progress",
  subheadline = "From strength and conditioning to nutrition support, every feature is designed to keep you moving forward.",
  features = [
    { icon: "Dumbbell", title: "Strength Programs", description: "Periodized plans to increase power, muscle, and confidence." },
    { icon: "HeartPulse", title: "Cardio Conditioning", description: "High-energy sessions that boost endurance and burn fat." },
    { icon: "Activity", title: "Performance Tracking", description: "Track workouts, body metrics, and weekly milestones." },
  ],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <Card key={index} className="card-hover rounded-xl border border-border bg-card shadow-sm transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground uppercase">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
