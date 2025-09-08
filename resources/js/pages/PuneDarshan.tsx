import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Camera,
  Star,
  Navigation,
  Car,
  Utensils,
  ShoppingBag,
} from "lucide-react";

const attractions = [
  {
    name: "Shaniwar Wada",
    description:
      "A magnificent 18th-century fortification and palace, Shaniwar Wada is a symbol of Pune's rich Maratha heritage. Built by the Peshwas, this historical monument offers a glimpse into royal architecture and hosts the famous sound and light show.",
    image: "/placeholder.svg",
    timings: "9:00 AM - 6:30 PM",
    duration: "2-3 hours",
    rating: 4.2,
    highlights: [
      "Historical Architecture",
      "Light & Sound Show",
      "Maratha Heritage",
      "Photography",
    ],
  },
  {
    name: "Aga Khan Palace",
    description:
      "A monument of great historical significance, Aga Khan Palace served as a prison for Mahatma Gandhi during the Quit India Movement. This beautiful palace now houses a Gandhi Museum and is surrounded by lush gardens.",
    image: "/placeholder.svg",
    timings: "9:00 AM - 5:30 PM",
    duration: "1-2 hours",
    rating: 4.3,
    highlights: [
      "Gandhi Museum",
      "Historical Significance",
      "Beautiful Gardens",
      "Peaceful Environment",
    ],
  },
  {
    name: "Dagdusheth Halwai Ganapati Temple",
    description:
      "One of the most revered temples in Pune, famous for its magnificent Ganesh idol adorned with gold jewelry. The temple attracts millions of devotees, especially during Ganesh Chaturthi celebrations.",
    image: "/placeholder.svg",
    timings: "4:00 AM - 11:30 PM",
    duration: "1 hour",
    rating: 4.5,
    highlights: [
      "Religious Significance",
      "Gold Decorated Idol",
      "Festival Celebrations",
      "Spiritual Experience",
    ],
  },
  {
    name: "Sinhagad Fort",
    description:
      "A hilltop military fortification located southwest of Pune, offering breathtaking views and trekking opportunities. Famous for the brave battle fought by Tanaji Malusare, it's a perfect destination for history enthusiasts and adventure seekers.",
    image: "/placeholder.svg",
    timings: "6:00 AM - 6:00 PM",
    duration: "4-5 hours",
    rating: 4.4,
    highlights: [
      "Trekking",
      "Panoramic Views",
      "Historical Fort",
      "Adventure Sports",
    ],
  },
];

const travelTips = [
  {
    icon: Car,
    title: "Transportation",
    tips: [
      "Use Pune Metro for convenient city travel",
      "Auto-rickshaws are readily available",
      "Ola/Uber services are widely accessible",
      "PMPML buses connect major attractions",
    ],
  },
  {
    icon: Utensils,
    title: "Local Cuisine",
    tips: [
      "Try famous Pune street food at FC Road",
      "Visit traditional Maharashtrian restaurants",
      "Don't miss Misal Pav and Vada Pav",
      "German Bakery in Koregaon Park for international cuisine",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Shopping",
    tips: [
      "Laxmi Road for traditional items",
      "Phoenix Marketcity for modern shopping",
      "Tulsi Baug for authentic Pune shopping",
      "Connaught Place for books and electronics",
    ],
  },
  {
    icon: Clock,
    title: "Best Time to Visit",
    tips: [
      "October to March - Pleasant weather",
      "Avoid monsoon season (June-September)",
      "Early morning visits for forts and outdoor attractions",
      "Evening visits for temples and cultural sites",
    ],
  },
];

const nearbyPlaces = [
  { name: "Lonavala", distance: "65 km", attraction: "Hill Station" },
  { name: "Mahabaleshwar", distance: "120 km", attraction: "Hill Station" },
  {
    name: "Ajanta Caves",
    distance: "240 km",
    attraction: "UNESCO World Heritage",
  },
  { name: "Ellora Caves", distance: "230 km", attraction: "Rock-cut Temples" },
  { name: "Mumbai", distance: "150 km", attraction: "Financial Capital" },
  { name: "Aurangabad", distance: "230 km", attraction: "Historical City" },
];

function AttractionCard({ attraction }: { attraction: any }) {
  return (
    <Card className="border-conference-blue/20 hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="relative">
        <div
          className="h-48 bg-gray-200 bg-cover bg-center"
          style={{ backgroundImage: `url(${attraction.image})` }}
        >
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <Camera className="w-12 h-12 text-white/70" />
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{attraction.rating}</span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl text-conference-blue">
          {attraction.name}
        </CardTitle>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{attraction.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{attraction.timings}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700 leading-relaxed mb-4">
          {attraction.description}
        </p>

        <div className="mb-4">
          <h4 className="font-semibold text-conference-blue mb-2">
            Highlights:
          </h4>
          <div className="flex flex-wrap gap-2">
            {attraction.highlights.map((highlight: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-conference-blue/10 text-conference-blue text-xs rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full border-conference-blue text-conference-blue hover:bg-conference-blue hover:text-white"
        >
          <Navigation className="w-4 h-4 mr-2" />
          Get Directions
        </Button>
      </CardContent>
    </Card>
  );
}

export default function PuneDarshan() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-conference-blue to-conference-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pune Darshan</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Explore the cultural heritage and beautiful attractions of Pune
            during your conference visit
          </p>
          <Button
            size="lg"
            className="bg-white text-conference-blue hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
          >
            Plan Your Visit
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
              Welcome to Pune
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Known as the "Oxford of the East" and "Queen of the Deccan," Pune
              is a vibrant city that beautifully blends its rich historical
              heritage with modern development. From ancient forts to
              magnificent palaces, sacred temples to lush gardens, Pune offers a
              diverse range of experiences for every visitor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
              Must-Visit Attractions
            </h2>
            <p className="text-xl text-gray-600">
              Discover the iconic landmarks that define Pune's character
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <AttractionCard key={index} attraction={attraction} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
              Travel Tips
            </h2>
            <p className="text-xl text-gray-600">
              Essential information to make your Pune visit memorable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelTips.map((tip, index) => (
              <Card key={index} className="border-conference-blue/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-conference-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-conference-blue">
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tip.tips.map((tipItem, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-conference-red rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{tipItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="py-16 bg-conference-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nearby Places to Explore
            </h2>
            <p className="text-xl text-blue-100">
              Extend your journey with these amazing destinations near Pune
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyPlaces.map((place, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 text-white"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                  <p className="text-blue-100 mb-2">{place.attraction}</p>
                  <div className="flex items-center justify-center space-x-1 text-blue-200">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{place.distance} from Pune</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
              Pune Tourist Map
            </h2>
            <p className="text-xl text-gray-600">
              Interactive map showing all major attractions and conference venue
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <span className="text-gray-500 text-xl">
                    Interactive Tourist Map
                  </span>
                  <p className="text-gray-400 text-sm mt-2">
                    Google Maps integration with attraction markers
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-conference-blue/20">
                <CardHeader>
                  <CardTitle className="text-xl text-conference-blue">
                    Quick Navigation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-conference-blue/30 text-conference-blue hover:bg-conference-blue hover:text-white"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    JSPM University
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-conference-blue/30 text-conference-blue hover:bg-conference-blue hover:text-white"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Shaniwar Wada
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-conference-blue/30 text-conference-blue hover:bg-conference-blue hover:text-white"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Aga Khan Palace
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-conference-blue/30 text-conference-blue hover:bg-conference-blue hover:text-white"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Sinhagad Fort
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-conference-blue/30 text-conference-blue hover:bg-conference-blue hover:text-white"
                  >
                    <Car className="w-4 h-4 mr-2" />
                    Transportation Hub
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
