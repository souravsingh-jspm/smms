import Agakhan from '@/assets/images/agakhan.jpg';
import DagdushethGanpati from '@/assets/images/Dagdusheth Halwai Ganapati.jpg';
import ShaniwarWada from '@/assets/images/Shaniwar Wada.jpg';
import SinhagadFort from '@/assets/images/Sinhagad Fort.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Clock, MapPin, ShoppingBag, Utensils } from 'lucide-react';
import Layout from './Layout';
// import ShaniwarWada from '@/assets/images/shaniwar-wada.jpg';
// import AgaKhanPalace from '@/assets/images/aga-khan-palace.jpg';
// import DagdushethTemple from '@/assets/images/dagdusheth-temple.jpg';
// import { Star, Navigation } from 'lucide-react';

const attractions = [
    {
        name: 'Dagdusheth Halwai Ganapati Temple',
        description:
            'One of the most revered temples in Pune, famous for its magnificent Ganesh idol adorned with gold jewelry. The temple attracts millions of devotees, especially during Ganesh Chaturthi celebrations.',
        image: DagdushethGanpati,
        timings: '4:00 AM - 11:30 PM',
        duration: '1 hour',
        rating: 4.5,
        highlights: ['Religious Significance', 'Gold Decorated Idol', 'Festival Celebrations', 'Spiritual Experience'],
    },
    {
        name: 'Shaniwar Wada',
        description:
            "A magnificent 18th-century fortification and palace, Shaniwar Wada is a symbol of Pune's rich Maratha heritage. Built by the Peshwas, this historical monument offers a glimpse into royal architecture and hosts the famous sound and light show.",
        image: ShaniwarWada,
        timings: '9:00 AM - 6:30 PM',
        duration: '2-3 hours',
        rating: 4.2,
        highlights: ['Historical Architecture', 'Light & Sound Show', 'Maratha Heritage', 'Photography'],
    },
    {
        name: 'Sinhagad Fort',
        description:
            "A hilltop military fortification located southwest of Pune, offering breathtaking views and trekking opportunities. Famous for the brave battle fought by Tanaji Malusare, it's a perfect destination for history enthusiasts and adventure seekers.",
        image: SinhagadFort,
        timings: '6:00 AM - 6:00 PM',
        duration: '4-5 hours',
        rating: 4.4,
        highlights: ['Trekking', 'Panoramic Views', 'Historical Fort', 'Adventure Sports'],
    },
    {
        name: 'Aga Khan Palace',
        description:
            'A monument of great historical significance, Aga Khan Palace served as a prison for Mahatma Gandhi during the Quit India Movement. This beautiful palace now houses a Gandhi Museum and is surrounded by lush gardens.',
        image: Agakhan,
        timings: '9:00 AM - 5:30 PM',
        duration: '1-2 hours',
        rating: 4.3,
        highlights: ['Gandhi Museum', 'Historical Significance', 'Beautiful Gardens', 'Peaceful Environment'],
    },
];

const travelTips = [
    {
        icon: Car,
        title: 'Transportation',
        tips: [
            'Use Pune Metro for convenient city travel',
            'Auto-rickshaws are readily available',
            'Ola/Uber services are widely accessible',
            'PMPML buses connect major attractions',
        ],
    },
    {
        icon: Utensils,
        title: 'Local Cuisine',
        tips: [
            'Try famous Pune street food at FC Road',
            'Visit traditional Maharashtrian restaurants',
            "Don't miss Misal Pav and Vada Pav",
            'German Bakery in Koregaon Park for international cuisine',
        ],
    },
    {
        icon: ShoppingBag,
        title: 'Shopping',
        tips: [
            'Laxmi Road for traditional items',
            'Phoenix Marketcity for modern shopping',
            'Tulsi Baug for authentic Pune shopping',
            'Connaught Place for books and electronics',
        ],
    },
    {
        icon: Clock,
        title: 'Best Time to Visit',
        tips: [
            'October to March - Pleasant weather',
            'Avoid monsoon season (June-September)',
            'Early morning visits for forts and outdoor attractions',
            'Evening visits for temples and cultural sites',
        ],
    },
];

const nearbyPlaces = [
    { name: 'Lonavala', distance: '65 km', attraction: 'Hill Station' },
    { name: 'Mahabaleshwar', distance: '120 km', attraction: 'Hill Station' },
    {
        name: 'Ajanta Caves',
        distance: '240 km',
        attraction: 'UNESCO World Heritage',
    },
    { name: 'Ellora Caves', distance: '230 km', attraction: 'Rock-cut Temples' },
    { name: 'Mumbai', distance: '150 km', attraction: 'Financial Capital' },
    { name: 'Aurangabad', distance: '230 km', attraction: 'Historical City' },
];

function AttractionCard({ attraction }: { attraction: any }) {
    return (
        <Card className="overflow-hidden border-conference-blue/20 transition-shadow duration-200 hover:shadow-lg">
            <div className="relative">
                <div className="flex h-48 justify-center rounded-lg">
                    <img src={attraction.image} loading="lazy" alt="" height={50} />
                </div>
            </div>

            <CardHeader>
                <CardTitle className="text-xl text-conference-blue">{attraction.name}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{attraction.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{attraction.timings}</span>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <p className="mb-4 leading-relaxed text-gray-700">{attraction.description}</p>

                <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-conference-blue">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                        {attraction.highlights.map((highlight: string, index: number) => (
                            <span key={index} className="rounded-full bg-conference-blue/10 px-3 py-1 text-xs text-conference-blue">
                                {highlight}
                            </span>
                        ))}
                    </div>
                </div>
                {/* 
                <Button variant="outline" className="w-full border-conference-blue text-conference-blue hover:bg-conference-blue hover:text-white">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                </Button> */}
            </CardContent>
        </Card>
    );
}

export default function PuneDarshan() {
    return (
        <div>
            <Layout>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-conference-blue to-conference-red py-20 text-white">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Pune Darshan</h1>
                        <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
                            Explore the cultural heritage and beautiful attractions of Pune during your conference visit
                        </p>
                        <Button size="lg" className="bg-white px-8 py-3 text-lg font-semibold text-conference-blue hover:bg-gray-100">
                            Plan Your Visit
                        </Button>
                    </div>
                </section>

                {/* Introduction */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-conference-blue md:text-4xl">Welcome to Pune</h2>
                            <p className="mx-auto max-w-4xl text-xl text-gray-600">
                                Known as the "Oxford of the East" and "Queen of the Deccan," Pune is a vibrant city that beautifully blends its rich
                                historical heritage with modern development. From ancient forts to magnificent palaces, sacred temples to lush
                                gardens, Pune offers a diverse range of experiences for every visitor.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Attractions */}
                <section className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-conference-blue md:text-4xl">Must-Visit Attractions</h2>
                            <p className="text-xl text-gray-600">Discover the iconic landmarks that define Pune's character</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {attractions.map((attraction, index) => (
                                <AttractionCard key={index} attraction={attraction} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Nearby Places */}
                <section className="bg-[#dfe1e9] py-16 text-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Nearby Places to Explore</h2>
                            <p className="text-xl text-black">Extend your journey with these amazing destinations near Pune</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {nearbyPlaces.map((place, index) => (
                                <Card key={index} className="border-white/20 bg-white/10 text-black">
                                    <CardContent className="p-6 text-center">
                                        <h3 className="mb-2 text-xl font-semibold">{place.name}</h3>
                                        <p className="mb-2 text-black">{place.attraction}</p>
                                        <div className="flex items-center justify-center space-x-1 text-black">
                                            <MapPin className="h-4 w-4" />
                                            <span className="text-sm">{place.distance} from Pune</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
}
