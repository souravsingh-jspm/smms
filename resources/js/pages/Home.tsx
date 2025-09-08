import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, ChevronLeft, ChevronRight, Clock, FileText, GraduationCap, MapPin, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const carouselImages = [
    {
        id: 1,
        url: '/placeholder.svg',
        alt: 'Conference Hall',
        title: 'Welcome to ICETMMS 2024',
        subtitle: 'International Conference on Emerging Trends in Mechanical Manufacturing Sciences',
    },
    {
        id: 2,
        url: '/placeholder.svg',
        alt: 'University Campus',
        title: 'JSPM University - SMMS',
        subtitle: 'Leading Innovation in Mechanical Manufacturing Sciences',
    },
    {
        id: 3,
        url: '/placeholder.svg',
        alt: 'Research Lab',
        title: 'Advancing Research',
        subtitle: 'Join us in shaping the future of manufacturing technology',
    },
];

const quickStats = [
    { icon: Users, label: 'Expected Participants', value: '500+' },
    { icon: FileText, label: 'Research Papers', value: '200+' },
    { icon: Award, label: 'Industry Experts', value: '50+' },
    { icon: GraduationCap, label: 'Universities', value: '100+' },
];

const importantDates = [
    { event: 'Paper Submission Deadline', date: 'March 15, 2024' },
    { event: 'Notification of Acceptance', date: 'April 10, 2024' },
    { event: 'Camera Ready Submission', date: 'April 25, 2024' },
    { event: 'Conference Dates', date: 'May 15-17, 2024' },
];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <div>
            {/* Hero Carousel Section */}
            <section className="relative h-[80vh] overflow-hidden">
                <div className="relative h-full w-full">
                    {carouselImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div
                                className="h-full w-full bg-gray-300 bg-cover bg-center"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(38, 60, 118, 0.7), rgba(139, 0, 0, 0.3)), url(${image.url})`,
                                }}
                            >
                                <div className="flex h-full items-center justify-center">
                                    <div className="max-w-4xl px-4 text-center text-white">
                                        <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">{image.title}</h1>
                                        <p className="mb-8 text-xl font-medium text-blue-100 md:text-2xl">{image.subtitle}</p>
                                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="bg-conference-red px-8 py-3 text-lg font-semibold text-white hover:bg-conference-red/90"
                                            >
                                                <a href="/call-for-papers">Submit Your Paper</a>
                                            </Button>
                                            <Button
                                                asChild
                                                size="lg"
                                                variant="outline"
                                                className="border-white px-8 py-3 text-lg font-semibold text-black hover:bg-white hover:text-conference-blue"
                                            >
                                                <a href="/about-us">Learn More</a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Navigation */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors duration-200 hover:bg-white/30"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors duration-200 hover:bg-white/30"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 w-3 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </section>
            {/* Quick Stats Section */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {quickStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-conference-blue">
                                    <stat.icon className="h-8 w-8 text-white" />
                                </div>
                                <div className="mb-2 text-3xl font-bold text-conference-blue">{stat.value}</div>
                                <div className="font-medium text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conference Overview */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-conference-blue md:text-4xl">About the Conference</h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            The International Conference on Emerging Trends in Mechanical Manufacturing Sciences brings together researchers,
                            academicians, and industry professionals to share cutting-edge research and innovations in mechanical manufacturing.
                        </p>
                    </div>

                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-conference-blue">Why Attend ICETMMS 2024?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-conference-red"></div>
                                    <span className="text-gray-700">Present your research to a global audience of experts</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-conference-red"></div>
                                    <span className="text-gray-700">Network with leading researchers and industry professionals</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-conference-red"></div>
                                    <span className="text-gray-700">Learn about the latest trends in manufacturing technology</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-conference-red"></div>
                                    <span className="text-gray-700">Explore collaboration opportunities</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex h-80 items-center justify-center rounded-lg bg-gray-200">
                            <span className="text-lg text-gray-500">Conference Overview Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Dates */}
            <section className="bg-conference-blue py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Important Dates</h2>
                        <p className="text-xl text-blue-100">Mark your calendar for these key deadlines</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {importantDates.map((item, index) => (
                            <Card key={index} className="border-white/20 bg-white/10 text-white">
                                <CardHeader className="pb-3">
                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-conference-red">
                                        <Clock className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{item.event}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-medium text-blue-100">{item.date}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-conference-blue to-conference-red py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Join Us?</h2>
                    <p className="mb-8 text-xl text-blue-100">
                        Don't miss this opportunity to be part of the premier conference in mechanical manufacturing sciences
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg" className="bg-white px-8 py-3 text-lg font-semibold text-conference-blue hover:bg-gray-100">
                            <a href="/call-for-papers">Submit Paper Now</a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white px-8 py-3 text-lg font-semibold text-conference-blue hover:bg-white/10"
                        >
                            <a href="/contact-us">Contact Us</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Conference Location */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div>
                            <h3 className="mb-6 text-3xl font-bold text-conference-blue">Conference Venue</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="mt-1 h-6 w-6 text-conference-red" />
                                    <div>
                                        <h4 className="text-lg font-semibold">JSPM University</h4>
                                        <p className="text-gray-600">School of Mechanical Manufacturing Sciences</p>
                                        <p className="text-gray-600">Pune, Maharashtra, India</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-gray-700">
                                    Located in the heart of Pune, JSPM University provides state-of-the-art facilities for conferences and academic
                                    events. The campus offers modern lecture halls, research laboratories, and comfortable accommodation for
                                    participants.
                                </p>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-conference-blue text-conference-blue hover:bg-conference-blue hover:text-white"
                                >
                                    <a href="/pune-darshan">Explore Pune</a>
                                </Button>
                            </div>
                        </div>
                        <div className="flex h-80 items-center justify-center rounded-lg bg-gray-200">
                            <span className="text-lg text-gray-500">Campus Image / Map</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
