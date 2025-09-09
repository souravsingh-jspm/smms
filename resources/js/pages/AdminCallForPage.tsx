import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';
import { CheckCircle, Clock, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import RichTextEditor from './RichTextEditor';

// const importantDates = [
//     {
//         event: 'Paper Submission Opens',
//         date: 'January 15, 2024',
//         status: 'completed',
//     },
//     {
//         event: 'Abstract Submission Deadline',
//         date: 'February 28, 2024',
//         status: 'completed',
//     },
//     {
//         event: 'Full Paper Submission Deadline',
//         date: 'March 15, 2024',
//         status: 'upcoming',
//     },
//     {
//         event: 'Notification of Acceptance',
//         date: 'April 10, 2024',
//         status: 'upcoming',
//     },
//     {
//         event: 'Camera Ready Submission',
//         date: 'April 25, 2024',
//         status: 'upcoming',
//     },
//     { event: 'Conference Dates', date: 'May 15-17, 2024', status: 'upcoming' },
// ];

const topicsOfInterest = [
    'Advanced Manufacturing Processes',
    'Additive Manufacturing and 3D Printing',
    'Automation and Robotics in Manufacturing',
    'Computer-Aided Design and Manufacturing',
    'Sustainable Manufacturing Technologies',
    'Materials Science and Engineering',
    'Quality Control and Metrology',
    'Lean Manufacturing and Six Sigma',
    'Industry 4.0 and Smart Manufacturing',
    'Supply Chain Management',
    'Manufacturing Systems Optimization',
    'Renewable Energy Systems Manufacturing',
];

const submissionGuidelines = [
    {
        title: 'Paper Format',
        content: 'Papers should be submitted in IEEE format with a maximum length of 8 pages including figures and references.',
    },
    {
        title: 'Language',
        content: 'All papers must be written in English with proper grammar and clear technical presentation.',
    },
    {
        title: 'Originality',
        content: 'Submitted papers must be original and not published or under review elsewhere.',
    },
    {
        title: 'Review Process',
        content: 'All papers will undergo double-blind peer review by at least two expert reviewers.',
    },
    {
        title: 'Submission Portal',
        content: 'Papers should be submitted through the conference management system available on our website.',
    },
    {
        title: 'Copyright',
        content: 'Authors retain copyright but grant the conference organizers permission to publish.',
    },
];

export default function CallForPapers() {
    const [content, setContent] = useState('');

    const [importantDates, setImportantDates] = useState([]);

    useEffect(() => {
        fetchAllData();
    }, []);

    const fetchAllData = async () => {
        const [submissionGuidelines, topicOfInterest, importDates] = await Promise.all([
            axios.get('/api/cf-submission-guidelines').then((res) => res.data),
            axios.get('/api/cf-topicof-interest').then((res) => res.data),
            axios.get('/api/cf-important-dates').then((res) => res.data),
        ]);

        setImportantDates(importDates);
    };
    console.log(importantDates);
    return (
        <div>
            {/* Hero Section */}
            <RichTextEditor value={content} onChange={setContent} />

            <section className="bg-gradient-to-r from-conference-blue to-conference-red py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="mb-6 text-4xl font-bold md:text-5xl">Call for Papers</h1>
                    <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
                        Submit your research and contribute to advancing mechanical manufacturing sciences
                    </p>
                    <Button size="lg" className="bg-white px-8 py-3 text-lg font-semibold text-conference-blue hover:bg-gray-100">
                        Submit Your Paper
                    </Button>
                </div>
            </section>

            {/* Important Dates */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-conference-blue md:text-4xl">Important Dates</h2>
                        <p className="text-xl text-gray-600">Stay updated with key submission deadlines</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {importantDates.map((item, index) => (
                            <Card key={index} className={`${item.status === 1 ? 'border-green-200 bg-green-50' : 'border-conference-blue/20'}`}>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center space-x-3">
                                        <div
                                            className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                                item.status === 1 ? 'bg-green-500' : 'bg-conference-blue'
                                            }`}
                                        >
                                            {item.status === 1 ? (
                                                <CheckCircle className="h-5 w-5 text-white" />
                                            ) : (
                                                <Clock className="h-5 w-5 text-white" />
                                            )}
                                        </div>
                                        <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className={`font-medium ${item.status === 'completed' ? 'text-green-700' : 'text-conference-blue'}`}>
                                        {item.date}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Topics of Interest */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-conference-blue md:text-4xl">Topics of Interest</h2>
                        <p className="text-xl text-gray-600">We welcome papers in the following areas</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {topicsOfInterest.map((topic, index) => (
                            <Card key={index} className="border-conference-blue/20 transition-colors duration-200 hover:border-conference-blue/40">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-3">
                                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-conference-red"></div>
                                        <span className="font-medium text-gray-700">{topic}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Submission Guidelines */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-conference-blue md:text-4xl">Submission Guidelines</h2>
                        <p className="text-xl text-gray-600">Please follow these guidelines for your paper submission</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {submissionGuidelines.map((guideline, index) => (
                            <Card key={index} className="border-conference-blue/20">
                                <CardHeader>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-conference-blue">
                                            <FileText className="h-4 w-4 text-white" />
                                        </div>
                                        <CardTitle className="text-xl text-conference-blue">{guideline.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="leading-relaxed text-gray-700">{guideline.content}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-conference-blue py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Submit?</h2>
                    <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
                        Join researchers from around the world in sharing cutting-edge research in mechanical manufacturing sciences
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="bg-conference-red px-8 py-3 text-lg font-semibold text-white hover:bg-conference-red/90">
                            Submit Paper Now
                        </Button>
                        <Button size="lg" variant="outline" className="border-white px-8 py-3 text-lg font-semibold text-black hover:bg-white/10">
                            Download Template
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
