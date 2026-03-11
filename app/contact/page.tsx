export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import ContactForm from "@/components/ContactForm";
import CTASparkles from "@/components/CTASparkles";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroSpotlight />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <ContactForm
            headline="Send a message"
            subheadline="Tell us your goal and your availability—we’ll recommend the best next step."
            contactInfo={[
              { icon: "MapPin", label: "Address", value: "2411 S Lamar Blvd, Austin, TX 78704" },
              { icon: "Phone", label: "Phone", value: "(512) 555-0199" },
              { icon: "Mail", label: "Email", value: "hello@ironpeakfitness.com" },
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
