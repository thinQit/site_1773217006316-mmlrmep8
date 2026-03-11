"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logoText?: string;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const mainNavItems: NavItem[] = [
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Transformations", href: "/transformations" },
  { label: "Contact", href: "/contact" },
];

// Anchor-based nav for home only (optional: can detect current route)
const anchorNavItems: NavItem[] = [
  { label: "Classes", href: "#classes" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Transformations", href: "#transformations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  logoText = "Iron Peak Fitness",
  ctaLabel = "Free Trial",
  ctaHref = "/free-trial",
  navItems,
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const showAnchors = pathname === "/";

  const items = navItems
    ? navItems
    : showAnchors
      ? anchorNavItems
      : mainNavItems;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="font-['Anton'] text-xl uppercase tracking-wide">{logoText}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-foreground/90 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-lg bg-primary px-6 py-3 font-semibold uppercase text-primary-foreground hover:bg-primary/90">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={cn("md:hidden overflow-hidden transition-all", open ? "max-h-80 border-t border-border" : "max-h-0")}>
        <nav className="space-y-1 bg-background px-4 py-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-semibold uppercase text-foreground/90 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-3 w-full rounded-lg bg-primary uppercase text-primary-foreground hover:bg-primary/90"
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
