"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold uppercase">Something went wrong</h2>
        <p className="text-muted-foreground">We hit a snag. Try again in a moment.</p>
        <Button onClick={() => reset()} className="transition-all duration-200 hover:scale-105 uppercase tracking-wide">
          Try Again
        </Button>
      </div>
    </div>
  );
}
