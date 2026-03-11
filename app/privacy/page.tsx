export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesGrid from "@/components/FeaturesGrid";
import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroSpotlight />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <FeaturesGrid
            headline="Privacy Summary"
            subheadline="We collect only what we need to respond to your requests."
            features={[
              { icon: "User", title: "Information You Provide", description: "Name, email, phone, and message." },
              { icon: "BarChart3", title: "Analytics", description: "Aggregated traffic insights only." },
              { icon: "Database", title: "Data Retention", description: "Retained as needed for support records." },
            ]}
          />
        </div>
      </ScrollReveal>
    </main>
  );
}
