import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CircleCheck,
  MapPin,
  ShieldCheck,
  Star,
  Trophy,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FacilityCard } from "@/components/facility-card";
import {
  features,

  popularSports,
  testimonials,
} from "@/lib/dummy-data";

const stats = [
  { value: "500+", label: "Verified venues" },
  { value: "12k+", label: "Games booked" },
  { value: "4.8", label: "Average rating" },
];

const featureIcons: LucideIcon[] = [ShieldCheck, CalendarCheck, Wallet, CircleCheck];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="gap-2 bg-background/10 text-background dark:text-background"
              >
                <Star className="size-3.5 fill-current" />
                500+ verified venues across the city
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Book your game.
                <br />
                Play your way.
              </h1>
              <p className="max-w-xl text-base leading-7 text-background/70 sm:text-lg">
                SportsNest connects athletes with local turfs, courts and pools.
                Check real-time availability, book in seconds, and gather your
                team — we handle the rest.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  variant="secondary"
                  render={<Link href="/facilities" />}
                >
                  Browse Facilities
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  render={<Link href="/facilities" />}
                  className="text-primary-foreground hover:bg-background/10"
                >
                  Explore Sports
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:justify-items-end">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-background/15 bg-background/10 p-5 text-center backdrop-blur"
                >
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs text-background/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular sports */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Popular Sports
            </h2>
            <p className="text-muted-foreground">
              Find venues for the games everyone is playing right now.
            </p>
          </div>
          <Button variant="outline" render={<Link href="/facilities" />}>
            View all sports
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {popularSports.map((sport) => (
            <Link
              key={sport.name}
              href="/facilities"
              className="group rounded-xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className={`flex size-12 items-center justify-center rounded-xl bg-linear-to-br text-2xl ${sport.gradient}`}
              >
                {sport.emoji}
              </span>
              <h3 className="mt-4 text-sm font-semibold">{sport.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {sport.venues} venues
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured facilities */}
      <section className="bg-muted/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl space-y-2">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Featured Facilities
              </h2>
              <p className="text-muted-foreground">
                Hand-picked venues athletes rate the highest this month.
              </p>
            </div>
            <Button variant="outline" render={<Link href="/facilities" />}>
              See all facilities
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* {featuredFacilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))} */}
          </div>
        </div>
      </section>

      {/* Why choose SportsNest */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Why Choose SportsNest
          </h2>
          <p className="text-muted-foreground">
            Booking a slot should be as easy as playing the game.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <div key={feature.title} className="rounded-xl border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* What athletes say */}
      <section className="bg-muted/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What Athletes Say
            </h2>
            <p className="text-muted-foreground">
              Thousands of players book with SportsNest every week. Here&apos;s
              what they think.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex h-full flex-col gap-4 rounded-xl border bg-card p-6"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`size-4 ${
                        starIndex < testimonial.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t pt-4">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {testimonial.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to book your next game? */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <Trophy className="mx-auto size-10" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to book your next game?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-background/70">
            Real-time slots fill fast on weekends. Reserve your court now —
            cancel free up to 24 hours before.
          </p>
          <Button
            size="lg"
            variant="secondary"
            render={<Link href="/facilities" />}
            className="mt-8"
          >
            Book a Facility
            <ArrowRight className="size-4" />
          </Button>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-background/70">
            <MapPin className="size-3.5" />
            500+ venues · No hidden fees · Instant confirmation
          </p>
        </div>
      </section>
    </div>
  );
}
