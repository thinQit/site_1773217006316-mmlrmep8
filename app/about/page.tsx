export const dynamic = 'force-dynamic';

import HeroGradientBlob from "@/components/HeroGradientBlob";
import FeaturesGrid from "@/components/FeaturesGrid";
import CTASparkles from "@/components/CTASparkles";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroGradientBlob />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <FeaturesGrid
            badge="Our Approach"
            headline="Intensity with intention"
            subheadline="Coach-led training with clear progressions and smart recovery."
            features={[
              { icon: "Dumbbell", title: "Strength First", description: "Build capacity safely over time." },
              { icon: "Flame", title: "Conditioning", description: "High output without burnout." },
              { icon: "Activity", title: "Mobility", description: "Move better with less pain." },
            ]}
          />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <CTASparkles />
        </div>
      </ScrollReveal>
    </main>
  );
}
