export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import FeaturesGrid from "@/components/FeaturesGrid";
import ScrollReveal from "@/components/ScrollReveal";

export default function FreeTrialPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <AceternityHeroAurora />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <FeaturesGrid
            badge="Trial Details"
            headline="Everything you need to know"
            subheadline="Arrive ready. We’ll handle the rest."
            features={[
              { icon: "Backpack", title: "What to Bring", description: "Shoes, water, and energy." },
              { icon: "Clock", title: "Arrive Early", description: "Come 10 minutes before class." },
              { icon: "Users", title: "Who It’s For", description: "Beginners to advanced athletes." },
            ]}
          />
        </div>
      </ScrollReveal>
    </main>
  );
}
