export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import ClassSchedule from "@/components/ClassSchedule";
import CTASparkles from "@/components/CTASparkles";
import ScrollReveal from "@/components/ScrollReveal";

export default function ClassesPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroSpotlight />
      </div>
      <ScrollReveal>
        <section id="schedule" className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <ClassSchedule />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <CTASparkles />
        </div>
      </ScrollReveal>
    </main>
  );
}
