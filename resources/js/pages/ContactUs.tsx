import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Building, Clock, Globe, Mail, MapPin, Phone, Send, Users } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Address',
        content: [
            'JSPM University',
            'School of Mechanical Manufacturing Sciences',
            'Survey No. 58, Indrayani Nagar',
            'Handewadi Road, Hadapsar',
            'Pune - 411028, Maharashtra, India',
        ],
    },
    {
        icon: Phone,
        title: 'Phone',
        content: ['+91 20 2680 1000 (Main)', '+91 20 2680 1001 (Conference Office)', '+91 20 2680 1002 (Registration)'],
    },
    {
        icon: Mail,
        title: 'Email',
        content: [
            'conference@jspm.edu.in (General)',
            'papers@jspm.edu.in (Paper Submission)',
            'registration@jspm.edu.in (Registration)',
            'accommodation@jspm.edu.in (Accommodation)',
        ],
    },
    {
        icon: Clock,
        title: 'Office Hours',
        content: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed', 'Conference Support: 24/7 during event'],
    },
];

const quickContacts = [
    {
        icon: Building,
        title: 'Conference Coordinator',
        name: 'Dr. Priya Sharma',
        email: 'priya.sharma@jspm.edu.in',
        phone: '+91 98765 43210',
    },
    {
        icon: Users,
        title: 'Registration Support',
        name: 'Ms. Anjali Kulkarni',
        email: 'anjali.kulkarni@jspm.edu.in',
        phone: '+91 98765 43211',
    },
    {
        icon: Globe,
        title: 'International Participants',
        name: 'Mr. Rahul Desai',
        email: 'rahul.desai@jspm.edu.in',
        phone: '+91 98765 43212',
    },
];

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-conference-blue to-conference-blue/80 py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
                    <p className="mx-auto max-w-3xl text-xl text-blue-100">Get in touch with us for any questions about ICETMMS 2024</p>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Contact Form */}
                        <div>
                            <Card className="border-conference-blue/20">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-conference-blue">Send us a Message</CardTitle>
                                    <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Your full name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="mt-1"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="your.email@example.com"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="mt-1"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="subject">Subject *</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                placeholder="Brief subject of your inquiry"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                                className="mt-1"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Please provide details about your inquiry..."
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                className="mt-1"
                                                rows={6}
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-conference-red font-semibold text-white hover:bg-conference-red/90"
                                            size="lg"
                                        >
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <Card key={index} className="border-conference-blue/20">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-conference-blue">
                                                <info.icon className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-lg font-semibold text-conference-blue">{info.title}</h3>
                                                <div className="space-y-1">
                                                    {info.content.map((line, lineIndex) => (
                                                        <p key={lineIndex} className="text-sm text-gray-700">
                                                            {line}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contacts */}
            {/* <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-conference-blue md:text-4xl">Quick Contacts</h2>
                        <p className="text-xl text-gray-600">Direct contact with our team members</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {quickContacts.map((contact, index) => (
                            <Card key={index} className="border-conference-blue/20 transition-shadow duration-200 hover:shadow-lg">
                                <CardHeader className="text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-conference-red">
                                        <contact.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl text-conference-blue">{contact.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-center">
                                    <p className="font-semibold text-gray-800">{contact.name}</p>
                                    <p className="text-sm text-gray-600">
                                        <Mail className="mr-1 inline h-4 w-4" />
                                        <a href={`mailto:${contact.email}`} className="text-conference-blue hover:underline">
                                            {contact.email}
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <Phone className="mr-1 inline h-4 w-4" />
                                        <a href={`tel:${contact.phone}`} className="text-conference-blue hover:underline">
                                            {contact.phone}
                                        </a>
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Map Section */}
            {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              JSPM University campus location
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-conference-blue mb-6">
                Getting to JSPM University
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-conference-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">From Pune Airport</h4>
                    <p className="text-gray-600 text-sm">
                      Take a taxi or cab (30-40 minutes). University is 15 km
                      from airport.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-conference-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">From Pune Railway Station</h4>
                    <p className="text-gray-600 text-sm">
                      Take bus route 106 or taxi (45 minutes). Distance is
                      approximately 20 km.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-conference-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">By Metro</h4>
                    <p className="text-gray-600 text-sm">
                      Take Purple Line to Hadapsar station, then auto-rickshaw
                      (5 minutes).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                <span className="text-gray-500 text-lg">
                  Interactive Map Placeholder
                </span>
                <p className="text-gray-400 text-sm mt-2">
                  Google Maps integration would go here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        </div>
    );
}
