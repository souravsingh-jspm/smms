import SmmsImage from '@/assets/images/about-us/smms.png';
import UniversityImage from '@/assets/images/about-us/university-image.jpg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Eye, Target } from 'lucide-react';
import Layout from './Layout';

export default function AboutUs() {
    return (
        <div>
            <Layout>
                <section className="bg-gradient-to-r from-conference-blue to-conference-red py-20 text-white">
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
                                <h2 className="mb-6 text-3xl font-bold text-conference-blue">JSPM University</h2>

                                <p className="mt-1 leading-relaxed text-gray-700">
                                    JSPM University Pune, is a distinguished institution committed to academic excellence, research, and innovation.
                                    With a strong foundation in engineering, technology, and management, JSPM has been at the forefront of fostering a
                                    transformative learning environment. The university is dedicated to empowering students with industry-relevant
                                    skills, modern infrastructure, and a multidisciplinary approach to education.
                                </p>
                                <p className="leading-relaxed text-gray-700">
                                    Through strategic collaborations with industry leaders and international universities, JSPM ensures that its
                                    students and faculty are engaged in cutting-edge research and practical applications of emerging technologies. The
                                    university&#39;s vision is to shape future-ready professionals by integrating knowledge, creativity, and
                                    leadership skills across diverse domains.
                                </p>
                            </div>
                            <div className="flex h-80 items-center justify-center rounded bg-gray-200">
                                <img src={UniversityImage} loading="lazy" alt="University Image" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-conference-blue md:text-4xl">School of Mechanical Manufacturing Sciences</h2>
                            <p className="mx-auto max-w-3xl text-xl text-gray-600">
                                A premier institution dedicated to advancing mechanical engineering and manufacturing excellence
                            </p>
                        </div>

                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div className="flex h-80 items-center justify-center rounded-lg bg-gray-200">
                                <img src={SmmsImage} loading="lazy" alt="SMMS Building" />
                                {/* <span className="text-lg text-gray-500">SMMS Building Image</span> */}
                            </div>
                            <div>
                                <p className="mb-6 leading-relaxed text-gray-700">
                                    The School of Mechanical and Manufacturing Sciences (SMMS) at JSPM University Pune is a premier academic unit
                                    focused on advancing research and education in core engineering disciplines. With an experienced and
                                    well-qualified faculty team, state-of-the-art laboratories, and an emphasis on interdisciplinary learning, SMMS is
                                    at the forefront of fostering innovation in mechanical engineering, manufacturing, and automation.
                                </p>
                                <p className="leading-relaxed text-gray-700">
                                    The school actively engages in research projects that align with global technological advancements, particularly
                                    in AI-driven engineering solutions. SMMS is committed to bridging the gap between academia and industry, ensuring
                                    students gain hands-on experience in the latest tools, software, and methodologies shaping the future of
                                    engineering and manufacturing.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-conference-blue md:text-4xl">About the Conference</h2>
                        </div>

                        <div className="grid items-center gap-12">
                            <div>
                                <p className="mb-6 leading-relaxed text-gray-700">
                                    The 1st International Conference on AI in Mechanical Engineering Transformation and Innovation (AIM-ETI) 2026,
                                    hosted by SMMS at JSPM University Pune, aims to serve as a dynamic platform for researchers, academicians, and
                                    industry professionals to explore the transformative impact of Artificial Intelligence (AI) in engineering.
                                    Scheduled for January 9-10, 2026, the conference will cover diverse tracks, including AI in Design and Simulation,
                                    Manufacturing, Robotics, Thermal Systems, Energy, Material Science, and Automotive & Aerospace Engineering.
                                </p>
                                <p className="leading-relaxed text-gray-700">
                                    With a focus on sustainable innovation, predictive analytics, and smart automation, AIM-ETI 2026 will foster
                                    knowledge exchange through keynote speeches, paper presentations, and expert panel discussions. The event will
                                    highlight emerging trends, industry applications, and groundbreaking research that redefine engineering in the AI
                                    era.
                                </p>
                                <p className="leading-relaxed text-gray-700">
                                    It is important to note that all the submitted research articles will undergo a plagiarism check followed by a
                                    double blind review process.
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
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-conference-blue">
                                        <Target className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-2xl text-conference-blue">Mission</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="leading-relaxed text-gray-700">
                                        To provide world-class education in mechanical manufacturing sciences, foster innovation through cutting-edge
                                        research, and develop globally competent professionals who contribute to sustainable technological
                                        advancement.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-conference-blue/20 text-center">
                                <CardHeader>
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-conference-red">
                                        <Eye className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-2xl text-conference-blue">Vision</CardTitle>
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
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-conference-blue">
                                        <Award className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-2xl text-conference-blue">Excellence</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="leading-relaxed text-gray-700">
                                        We are committed to academic excellence, innovative research, ethical practices, and holistic development of
                                        our students. Our focus on quality education and industry relevance ensures our graduates excel in their
                                        chosen fields.
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
            </Layout>
        </div>
    );
}
