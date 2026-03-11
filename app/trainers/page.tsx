export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";
import TrainerCardsGrid from "@/components/TrainerCardsGrid";
import CTASparkles from "@/components/CTASparkles";
import ScrollReveal from "@/components/ScrollReveal";

export default function TrainersPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroBeams />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <TrainerCardsGrid />
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
