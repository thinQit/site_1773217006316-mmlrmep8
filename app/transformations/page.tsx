export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield";
import TransformationGallery from "@/components/TransformationGallery";
import ScrollReveal from "@/components/ScrollReveal";

export default function TransformationsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroStarfield />
      </div>
      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <TransformationGallery />
        </div>
      </ScrollReveal>
    </main>
  );
}
