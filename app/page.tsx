export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import ClassSchedule from "@/components/ClassSchedule";
import TrainerCardsGrid from "@/components/TrainerCardsGrid";
import MembershipTiers from "@/components/MembershipTiers";
import TransformationGallery from "@/components/TransformationGallery";
import StatsCounter from "@/components/StatsCounter";
import CTASparkles from "@/components/CTASparkles";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import ScrollReveal from "@/components/ScrollReveal";
import AngledSectionDivider from "@/components/AngledSectionDivider";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Austin, TX • South Lamar"
          title="Austin’s most intense training floor—built for real results"
          subtitle="Iron Peak Fitness combines elite coaching, high-energy classes, and a community that shows up."
          primaryCta={{ label: "Claim a Free Trial Week", href: "/free-trial" }}
          secondaryCta={{ label: "View Class Schedule", href: "/classes#schedule" }}
        />
      </div>
      <AngledSectionDivider />
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <ClassSchedule />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <TrainerCardsGrid />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <MembershipTiers />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <TransformationGallery />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <StatsCounter />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <CTASparkles />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <TestimonialsAnimated
            title="Austin members who don’t miss their workouts anymore"
            subtitle="High energy, real coaching, and a community that keeps you accountable."
            autoplay
            testimonials={[
              {
                quote: "The HIIT programming is legit—hard but smart.",
                name: "Kelsey W.",
                designation: "Unlimited Member • 9 months",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
              },
              {
                quote: "I have a plan and people who notice when I’m not there.",
                name: "Marcus J.",
                designation: "Peak Coaching • 4 months",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
              },
              {
                quote: "I’m stronger, my posture is better, and I sleep like a rock.",
                name: "Elena P.",
                designation: "Starter Member • 6 months",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg",
              },
            ]}
          />
        </div>
      </ScrollReveal>
    </main>
  );
}
