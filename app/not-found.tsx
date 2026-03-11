import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase">404</h1>
        <p className="text-muted-foreground">Page not found.</p>
        <Button asChild className="transition-all duration-200 hover:scale-105 uppercase tracking-wide">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
