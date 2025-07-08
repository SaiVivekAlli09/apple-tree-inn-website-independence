export interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  maxGuests: number;
  bedType: string;
}

export const rooms: Room[] = [
  {
    id: "standard-king",
    name: "Standard King Room",
    description: "Comfortable and spacious room with a king-size bed, perfect for couples or business travelers. Features all essential amenities for a relaxing stay.",
    price: "$65+",
    features: [
      "One king-size bed",
      "Private bathroom with shower",
      "Air conditioning & heating",
      "Free Wi-Fi",
      "Flat-screen TV with cable",
      "Coffee maker",
      "Mini refrigerator",
      "Work desk",
      "Daily housekeeping"
    ],
    image: "/lovable-uploads/8af38051-83db-489e-9e35-6852cc30d404.png",
    maxGuests: 2,
    bedType: "King Bed"
  },
  {
    id: "standard-two-queen",
    name: "Standard 2 Queen Beds Room",
    description: "Ideal for families or groups, this room features two comfortable queen beds with plenty of space for up to 4 guests.",
    price: "$75+",
    features: [
      "Two queen-size beds",
      "Private bathroom with shower",
      "Air conditioning & heating",
      "Free Wi-Fi",
      "Flat-screen TV with cable",
      "Coffee maker",
      "Mini refrigerator",
      "Work desk",
      "Daily housekeeping",
      "Extra seating area"
    ],
    image: "/lovable-uploads/cfa54a07-c92f-45bc-af6d-c6eef321b875.png",
    maxGuests: 4,
    bedType: "Two Queen Beds"
  },
  {
    id: "regular-suite-king",
    name: "Regular Suites King Room",
    description: "Upgraded suite with a king bed and additional living space. Perfect for extended stays or those wanting extra comfort and space.",
    price: "$110+",
    features: [
      "One king-size bed",
      "Separate living area",
      "Private bathroom with shower",
      "Air conditioning & heating",
      "Free Wi-Fi",
      "Large flat-screen TV",
      "Coffee maker & kitchenette",
      "Full-size refrigerator",
      "Work desk & seating area",
      "Daily housekeeping",
      "Premium linens"
    ],
    image: "/lovable-uploads/6d0cef9f-e77d-4bca-878f-bdc922e4fa7f.png",
    maxGuests: 2,
    bedType: "King Bed"
  },
  {
    id: "executive-suite-king",
    name: "Executive Suites King Room",
    description: "Premium suite offering luxury accommodations with enhanced amenities and elegant furnishings for the discerning traveler.",
    price: "$130+",
    features: [
      "One king-size bed",
      "Spacious living room",
      "Private bathroom with premium fixtures",
      "Air conditioning & heating",
      "Free Wi-Fi",
      "Premium flat-screen TV",
      "Full kitchenette with microwave",
      "Full-size refrigerator & freezer",
      "Executive work desk",
      "Comfortable seating area",
      "Daily housekeeping",
      "Luxury linens & towels",
      "Complimentary coffee & tea"
    ],
    image: "/lovable-uploads/928fdc43-2a0e-48e0-bce8-1cbfcd5336ed.png",
    maxGuests: 2,
    bedType: "King Bed"
  },
  {
    id: "executive-suite-double",
    name: "Executive Suites Double Room",
    description: "Our most spacious and luxurious accommodation, featuring two queen beds in a premium suite setting with top-tier amenities.",
    price: "$140+",
    features: [
      "Two queen-size beds",
      "Large living room area",
      "Private bathroom with premium fixtures & jacuzzi",
      "Air conditioning & heating",
      "Free Wi-Fi",
      "Premium flat-screen TV",
      "Full kitchenette with microwave",
      "Full-size refrigerator & freezer",
      "Executive work desk",
      "Comfortable seating & dining area",
      "Daily housekeeping",
      "Luxury linens & towels",
      "Complimentary coffee & tea",
      "Additional storage space"
    ],
    image: "/lovable-uploads/c2af490f-df7b-4274-86df-db46d9ab387c.png",
    maxGuests: 4,
    bedType: "Two Queen Beds"
  }
];

export const getNearbyAttractions = () => [
  {
    name: "Independence Cinemas",
    distance: "Under 300 feet",
    description: "Movie theater directly opposite the hotel"
  },
  {
    name: "Restaurants",
    distance: "Within 0.2 miles",
    description: "Taco Bell, McDonald's, Subway, Braum's, Arby's"
  },
  {
    name: "Independence Science and Technology Center",
    distance: "Less than 0.2 miles",
    description: "Interactive science museum and educational center"
  },
  {
    name: "Museum of Independence",
    distance: "Less than 0.3 miles",
    description: "Local history and cultural exhibits"
  },
  {
    name: "Riverside Park & Ralph Mitchell Zoo",
    distance: "Less than 1.3 miles",
    description: "Beautiful park with zoo, perfect for families"
  }
];