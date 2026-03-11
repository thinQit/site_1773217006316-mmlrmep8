export const dynamic = 'force-dynamic';

import HeroLamp from "@/components/HeroLamp";
import PricingTable from "@/components/PricingTable";
import CTASparkles from "@/components/CTASparkles";
import ScrollReveal from "@/components/ScrollReveal";

export default function PersonalTrainingPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroLamp />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <PricingTable
            headline="PT Packages"
            subheadline="Train 1:1 for faster progress."
            tiers={[
              {
                name: "Single Session",
                price: "$95",
                description: "50 minutes • 1:1 coaching",
                features: ["Warm-up + main lifts", "Technique cues", "Conditioning finisher"],
                ctaLabel: "Book Session",
                ctaHref: "/contact#pt",
              },
              {
                name: "Pack of 5",
                price: "$450",
                description: "Save $25 • Valid 90 days",
                features: ["Weekly progression", "Form feedback", "Programming adjustments"],
                ctaLabel: "Buy Pack of 5",
                ctaHref: "/contact#pt",
                highlighted: true,
              },
              {
                name: "Pack of 10",
                price: "$850",
                description: "Save $100 • Valid 120 days",
                features: ["Baseline + re-test", "Roadmap", "Habit accountability"],
                ctaLabel: "Buy Pack of 10",
                ctaHref: "/contact#pt",
              },
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
