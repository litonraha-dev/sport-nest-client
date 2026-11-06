// Dummy data for the homepage and facilities pages.
// Replace with API-backed data later — the shapes are kept simple on purpose.

export type Sport = {
  name: string;
  emoji: string;
  venues: number;
  gradient: string;
};

export type Facility = {
  _id: number;
  slug: string;
  name: string;
  sportType: string;
  location: string;
  imageUrl: string;
  pricePerHour: number;
  description: string;
  capacity: number;
  
};

export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  quote: string;
  rating: number;
};

export const popularSports: Sport[] = [
  { name: "Football", emoji: "⚽", venues: 124, gradient: "from-emerald-500 to-teal-600" },
  { name: "Cricket", emoji: "🏏", venues: 98, gradient: "from-amber-500 to-orange-600" },
  { name: "Badminton", emoji: "🏸", venues: 156, gradient: "from-sky-500 to-blue-600" },
  { name: "Tennis", emoji: "🎾", venues: 87, gradient: "from-lime-500 to-green-600" },
  { name: "Basketball", emoji: "🏀", venues: 112, gradient: "from-orange-500 to-red-600" },
  { name: "Swimming", emoji: "🏊", venues: 64, gradient: "from-cyan-500 to-sky-600" },
  { name: "Volleyball", emoji: "🏐", venues: 73, gradient: "from-rose-500 to-pink-600" },
  { name: "Table Tennis", emoji: "🏓", venues: 95, gradient: "from-violet-500 to-purple-600" },
];

// export const facilities: Facility[] = [
//   {
//     _id: 1,
//     slug: "green-arena",
//     name: "Green Arena",
//     sports: ["Football", "Cricket"],
//     location: "Dhanmondi, Dhaka",
//     priceFrom: 1200,
//     rating: 4.8,
//     reviews: 214,
//     description: "Full-size floodlit turf with sitting area, locker rooms and free parking.",
//     gradient: "from-emerald-500 to-teal-600",
//     featured: true,
//   },
//   {
//     _id: 2,
//     slug: "smash-zone",
//     name: "Smash Zone",
//     sports: ["Badminton", "Table Tennis"],
//     location: "Uttara, Dhaka",
//     priceFrom: 600,
//     rating: 4.7,
//     reviews: 187,
//     description: "Six wooden indoor courts with pro-grip flooring and in-house coaching.",
//     gradient: "from-sky-500 to-blue-600",
//     featured: true,
//   },
//   {
//     _id: 3,
//     slug: "ace-tennis-club",
//     name: "Ace Tennis Club",
//     sports: ["Tennis"],
//     location: "Gulshan, Dhaka",
//     priceFrom: 1500,
//     rating: 4.9,
//     reviews: 156,
//     description: "Clay and hard courts with ball machines, lounge cafe and evening sessions.",
//     gradient: "from-lime-500 to-green-600",
//     featured: true,
//   },
//   {
//     id: 4,
//     slug: "hoop-house",
//     name: "Hoop House",
//     sports: ["Basketball", "Volleyball"],
//     location: "Banani, Dhaka",
//     priceFrom: 900,
//     rating: 4.6,
//     reviews: 132,
//     description: "Indoor multipurpose arena with scoreboard, sound system and bleachers.",
//     gradient: "from-orange-500 to-red-600",
//     featured: true,
//   },
//   {
//     id: 5,
//     slug: "aqua-pulse",
//     name: "Aqua Pulse",
//     sports: ["Swimming"],
//     location: "Mirpur, Dhaka",
//     priceFrom: 400,
//     rating: 4.5,
//     reviews: 98,
//     description: "Heated 25m pool with lap lanes, kids zone and certified lifeguards on duty.",
//     gradient: "from-cyan-500 to-sky-600",
//     featured: false,
//   },
//   {
//     id: 6,
//     slug: "the-den-sports-hub",
//     name: "The Den Sports Hub",
//     sports: ["Football", "Basketball"],
//     location: "Mohakhali, Dhaka",
//     priceFrom: 1000,
//     rating: 4.4,
//     reviews: 121,
//     description: "Rooftop 5-a-side cage plus hoop court with rentable gear and vending cafe.",
//     gradient: "from-violet-500 to-purple-600",
//     featured: false,
//   },
// ];

// export const featuredFacilities = facilities.filter((f) => f.featured);

export const testimonials: Testimonial[] = [
  {
    name: "Arif Hossain",
    role: "Football league organizer",
    initials: "AH",
    quote:
      "I book turf for our weekly league every Friday. Instant confirmation and zero double-bookings since we switched to SportsNest.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "Badminton player",
    initials: "NJ",
    quote:
      "Found a court three streets from my office in two minutes. The photos and reviews are honest, so I got exactly what I expected.",
    rating: 5,
  },
  {
    name: "Rakib Chowdhury",
    role: "Cricket captain",
    initials: "RC",
    quote:
      "Splitting the cost with the team and getting slot reminders built-in is a lifesaver. Cancellation refund took less than a day.",
    rating: 4,
  },
];

export const features = [
  {
    title: "Verified venues",
    description:
      "Every facility is inspected in person before it's listed, so photos match reality.",
  },
  {
    title: "Instant confirmation",
    description:
      "Real-time availability means your slot is locked the second you pay — no waiting games.",
  },
  {
    title: "Best price guarantee",
    description:
      "Book at venue-standard pricing, always. No hidden fees, no markup surprises.",
  },
  {
    title: "Easy cancellation",
    description:
      "Plans change. Cancel free up to 24 hours before kickoff and get an instant refund.",
  },
];
