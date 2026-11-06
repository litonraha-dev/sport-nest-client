import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Star } from "lucide-react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function FacilityDetailPage({ params }: Props) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/facilities/${id}`,
    {
      cache: "no-store",
    }
  );

  if (res.status === 404) notFound();

  if (!res.ok) {
    throw new Error("Failed to fetch facility details");
  }

  const responseData = await res.json();
  const facility = responseData.data ?? responseData;

  if (!facility || !(facility._id || facility.id)) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <Link
        href="/facilities"
        className="text-sm text-muted-foreground underline-offset-4 hover:underline"
      >
        ← Back to all facilities
      </Link>

      <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white sm:p-10">
        <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
          {facility.sportType}
        </span>

        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
          {facility.name}
        </h1>

        <p className="mt-2 flex items-center gap-2 text-white/80">
          <MapPin className="size-4" />
          {facility.location}
        </p>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4" />
              {facility.location}
            </span>

            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              {facility.rating} ({facility.reviews} reviews)
            </span>
          </div>

          <h2 className="text-xl font-semibold">
            About this facility
          </h2>

          <p className="leading-7 text-muted-foreground">
            {facility.description}
          </p>
        </div>

        <aside className="h-fit rounded-2xl border bg-card p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">
            Starting from
          </p>

          <p className="mt-2 text-3xl font-bold">
            ৳{facility.pricePerHour ?? facility.priceFrom}
            <span className="text-sm font-normal text-muted-foreground">
              /hour
            </span>
          </p>

          <Link
            href={`/facilities/${id}/booking`}
            className="mt-5 flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Check Availability
          </Link>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Free cancellation up to 24 hours before the slot.
          </p>

          <Link
            href="/facilities"
            className="mt-4 flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            Back to All Facilities
            <ArrowRight className="size-4" />
          </Link>
        </aside>
      </div>
    </div>
  );
}