export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves";
import MembershipTiers from "@/components/MembershipTiers";
import PricingTable from "@/components/PricingTable";
import CTASparkles from "@/components/CTASparkles";
import ScrollReveal from "@/components/ScrollReveal";

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroWaves />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <MembershipTiers />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <section id="compare" className="animate-fade-in-up py-20 md:py-28 bg-background">
          <PricingTable
            headline="Compare Membership Plans"
            subheadline="Choose the structure and support that fits your goals."
            tiers={[
              {
                name: "Starter",
                price: "$89",
                period: "/month",
                description: "2 classes per week",
                features: ["8 classes/month", "Open gym access", "Initial assessment"],
                ctaLabel: "Choose Starter",
                ctaHref: "/contact?plan=starter",
              },
              {
                name: "Unlimited",
                price: "$149",
                period: "/month",
                description: "Train 4–6x per week",
                features: ["Unlimited classes", "Monthly check-in", "Priority waitlist"],
                ctaLabel: "Choose Unlimited",
                ctaHref: "/contact?plan=unlimited",
                highlighted: true,
              },
              {
                name: "Peak Coaching",
                price: "$289",
                period: "/month",
                description: "Fast, coached transformation",
                features: ["Unlimited classes", "2 PT sessions/month", "Customized roadmap"],
                ctaLabel: "Choose Peak Coaching",
                ctaHref: "/contact?plan=peak-coaching",
              },
            ]}
          />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <CTASparkles />
        </div>
      </ScrollReveal>
    </main>
  );
}
