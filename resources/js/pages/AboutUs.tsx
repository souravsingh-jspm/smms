import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Eye, Target } from 'lucide-react';

export default function AboutUs() {
    return (
        <div>
            <section className="from-conference-blue to-conference-blue/80 bg-gradient-to-r py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="mb-6 text-4xl font-bold md:text-5xl">About Us</h1>
                    <p className="mx-auto max-w-3xl text-xl text-blue-100">
                        Learn about JSPM University and the School of Mechanical Manufacturing Sciences
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="text-conference-blue mb-6 text-3xl font-bold">JSPM University</h2>
                            <p className="mb-6 leading-relaxed text-gray-700">
                                JSPM University stands as a beacon of excellence in higher education, committed to fostering innovation, research, and
                                academic excellence. Established with the vision of creating world-class professionals, our university has been at the
                                forefront of educational advancement for over two decades.
                            </p>
                            <p className="leading-relaxed text-gray-700">
                                With state-of-the-art infrastructure, experienced faculty, and a commitment to holistic development, JSPM University
                                continues to shape the future leaders of tomorrow across various disciplines.
                            </p>
                        </div>
                        <div className="flex h-80 items-center justify-center rounded-lg bg-gray-200">
                            <span className="text-lg text-gray-500">University Campus Image</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-conference-blue mb-4 text-3xl font-bold md:text-4xl">School of Mechanical Manufacturing Sciences</h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            A premier institution dedicated to advancing mechanical engineering and manufacturing excellence
                        </p>
                    </div>

                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="flex h-80 items-center justify-center rounded-lg bg-gray-200">
                            <span className="text-lg text-gray-500">SMMS Building Image</span>
                        </div>
                        <div>
                            <p className="mb-6 leading-relaxed text-gray-700">
                                The School of Mechanical Manufacturing Sciences (SMMS) at JSPM University is a leading center for mechanical
                                engineering education and research. Our department focuses on cutting-edge research in manufacturing processes,
                                automation, and sustainable engineering solutions.
                            </p>
                            <p className="leading-relaxed text-gray-700">
                                With advanced laboratories, industry partnerships, and a faculty of renowned experts, SMMS prepares students to tackle
                                the challenges of modern manufacturing and contribute to technological advancement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="border-conference-blue/20 text-center">
                            <CardHeader>
                                <div className="bg-conference-blue mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                                    <Target className="h-8 w-8 text-white" />
                                </div>
                                <CardTitle className="text-conference-blue text-2xl">Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="leading-relaxed text-gray-700">
                                    To provide world-class education in mechanical manufacturing sciences, foster innovation through cutting-edge
                                    research, and develop globally competent professionals who contribute to sustainable technological advancement.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-conference-blue/20 text-center">
                            <CardHeader>
                                <div className="bg-conference-red mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                                    <Eye className="h-8 w-8 text-white" />
                                </div>
                                <CardTitle className="text-conference-blue text-2xl">Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="leading-relaxed text-gray-700">
                                    To be a globally recognized center of excellence in mechanical manufacturing sciences, leading transformative
                                    research and education that addresses contemporary challenges and shapes the future of manufacturing.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-conference-blue/20 text-center">
                            <CardHeader>
                                <div className="bg-conference-blue mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                                    <Award className="h-8 w-8 text-white" />
                                </div>
                                <CardTitle className="text-conference-blue text-2xl">Excellence</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="leading-relaxed text-gray-700">
                                    We are committed to academic excellence, innovative research, ethical practices, and holistic development of our
                                    students. Our focus on quality education and industry relevance ensures our graduates excel in their chosen
                                    fields.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="bg-conference-blue py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Academic Excellence</h2>
                        <p className="text-xl text-blue-100">Our commitment to quality education and research</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold">25+</div>
                            <div className="text-blue-100">Years of Excellence</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold">500+</div>
                            <div className="text-blue-100">Faculty Members</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold">10,000+</div>
                            <div className="text-blue-100">Alumni Network</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold">100+</div>
                            <div className="text-blue-100">Industry Partners</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
