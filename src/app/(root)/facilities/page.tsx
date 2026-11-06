import type { Metadata } from "next";
import { popularSports } from "@/lib/dummy-data";

import { Badge } from "@/components/ui/badge";
import { Suspense } from "react";
import { FacilityCard } from "@/components/facility-card";

export const metadata: Metadata = {
  title: "All Facilities",
  description: "Browse every verified sports facility available on SportsNest.",
};

const sportFilters = ["All", ...popularSports.map((sport) => sport.name)];

export default function FacilitiesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <Suspense fallback={<p>Loading facilities...</p>}>
        <FacilitiesList />
      </Suspense>
    </div>
  );
}


async function FacilitiesList() {
  const facilities = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/facilities`,{
    cache: "no-store",
  })

  const facilitiesData = await facilities.json();
  console.log(facilitiesData, "from all facilities");
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          All Facilities
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          {facilitiesData.length} verified venues across the city. Pick a sport, check
          real-time availability, and lock your slot in under a minute.
        </p>
      </section>

      <section className="mt-8 flex flex-wrap gap-2">
        {sportFilters.map((sport) => (
          <Badge
            key={sport}
            variant={sport === "All" ? "default" : "secondary"}
            className="cursor-pointer rounded-full px-4 py-1.5"
          >
            {sport}
          </Badge>
        ))}
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilitiesData.map((facility) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </section>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Can&apos;t find your field?{" "}
        <a href="mailto:hello@sportsnest.com" className="font-medium underline underline-offset-4">
          Tell us about it
        </a>{" "}
        and we&apos;ll add it.
      </p>
    </div>
  );
}
