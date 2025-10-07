import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import Layout from './Layout';

// Define your business WhatsApp number here (include country code, no '+', spaces, or symbols)
const WHATSAPP_NUMBER = '917057309310'; // <-- IMPORTANT: REPLACE WITH YOUR NUMBER

const contactInfo = [
    // ... (rest of your contactInfo array is unchanged)
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
];

const quickContacts = [
    // ... (rest of your quickContacts array is unchanged)
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

    // MODIFIED: This function now sends data to WhatsApp
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Format the message with the form data
        const messageLines = [
            `*New Inquiry from Website*`,
            `--------------------------`,
            `*Name:* ${formData.name}`,
            `*Email:* ${formData.email}`,
            `*Subject:* ${formData.subject}`,
            `*Message:* ${formData.message}`,
        ];
        const formattedMessage = messageLines.join('\n');

        // 2. Encode the message for the URL
        const encodedMessage = encodeURIComponent(formattedMessage);

        // 3. Construct the WhatsApp URL
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // 4. Open the URL in a new tab
        window.open(whatsappURL, '_blank');

        // Optional: Reset form after preparing the message
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div>
            <Layout>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-conference-blue to-conference-red py-20 text-white">
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
                                            {/* ... Your form inputs (name, email, subject, message) are unchanged ... */}
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
                            <div className="space-y-6">{/* ... Your contact info section is unchanged ... */}</div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
}
