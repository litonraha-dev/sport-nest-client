"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, ArrowUpRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Facility } from "@/lib/dummy-data";

export function FacilityCard({ facility }: { facility: Facility }) {
  console.log(facility, "from card")
  return (
    <Link
      href={`/facilities/${facility._id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
    >
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden bg-muted">
        <Image
          src={facility.imageUrl}
          alt={facility.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        {/* Sport Badge */}
        <Badge className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm hover:bg-white">
          {facility.sportType}
        </Badge>

        {/* Rating */}
        {/* <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
          <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
          {facility.rating}
        </div> */}

        {/* Image Bottom Location */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm font-medium text-white">
          <MapPin className="size-4" />
          {facility.location}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Title and Description */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
            {facility.name}
          </h3>

          <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
            {facility.description}
          </p>
        </div>

        {/* Divider */}
        <div className="mt-auto border-t border-border/70 pt-4">
          <div className="flex items-center justify-between gap-3">
            {/* Price */}
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold tracking-tight text-primary">
                  ৳{facility.pricePerHour}
                </span>
                <span className="text-xs text-muted-foreground">
                  / hour
                </span>
              </div>

              {/* <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5" />
                <span>{facility.reviews} reviews</span>
              </div> */}
            </div>

            {/* Booking Action */}
            <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 group-hover:rotate-45 group-hover:scale-110">
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}


