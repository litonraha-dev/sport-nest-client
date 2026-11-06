import Link from "next/link";
import { Mail, MapPin, Phone, Trophy } from "lucide-react";
import { popularSports } from "@/lib/dummy-data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/facilities", label: "All Facilities" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="space-y-3 md:pr-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Trophy className="size-5" />
            </span>
            <span className="text-lg">
              Sport<span className="text-primary/80">Nest</span>
            </span>
          </Link>
          <p className="text-sm leading-6 text-muted-foreground">
            The simplest way to discover, compare and book sports facilities near you.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Popular Sports</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {popularSports.slice(0, 5).map((sport) => (
              <li key={sport.name}>
                <Link href="/facilities" className="transition-colors hover:text-foreground">
                  {sport.emoji} {sport.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>House 12, Road 5, Dhanmondi, Dhaka 1205</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" />
              <span>+880 1700-000000</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" />
              <span>hello@sportsnest.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 SportsNest. All rights reserved.</p>
          <p>Built for athletes, by athletes.</p>
        </div>
      </div>
    </footer>
  );
}
