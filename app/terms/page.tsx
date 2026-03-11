export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesGrid from "@/components/FeaturesGrid";
import ScrollReveal from "@/components/ScrollReveal";

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroSpotlight />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <FeaturesGrid
            headline="Website Terms"
            subheadline="Terms for using the Iron Peak Fitness website."
            features={[
              { icon: "ShieldAlert", title: "No Medical Advice", description: "Content is informational only." },
              { icon: "BadgeCheck", title: "Accuracy", description: "Schedules and pricing may change." },
              { icon: "Scale", title: "Liability", description: "Use of site is at your own risk." },
            ]}
          />
        </div>
      </ScrollReveal>
    </main>
  );
}
