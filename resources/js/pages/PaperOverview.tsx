import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, FileText, Search, Users } from 'lucide-react';
import Layout from './Layout';

const paperCategories = [
    {
        icon: FileText,
        title: 'Research Papers',
        description:
            'Original research contributions presenting novel findings, methodologies, or theoretical advances in mechanical manufacturing sciences.',
        requirements: [
            'Original research with significant contribution',
            'Maximum 8 pages in IEEE format',
            'Comprehensive literature review',
            'Clear methodology and results',
            'Statistical analysis where applicable',
        ],
    },
    {
        icon: Search,
        title: 'Review Papers',
        description:
            'Comprehensive surveys of current state-of-the-art in specific areas of mechanical manufacturing, identifying trends and future directions.',
        requirements: [
            'Systematic review of existing literature',
            'Maximum 12 pages in IEEE format',
            'Critical analysis of current research',
            'Identification of research gaps',
            'Future research directions',
        ],
    },
    {
        icon: Users,
        title: 'Case Studies',
        description:
            'Practical applications and real-world implementations showcasing successful solutions in industrial manufacturing environments.',
        requirements: [
            'Real-world industrial application',
            'Maximum 6 pages in IEEE format',
            'Problem-solution approach',
            'Quantifiable results and benefits',
            'Lessons learned and recommendations',
        ],
    },
];

const reviewProcess = [
    {
        step: 1,
        title: 'Initial Submission',
        description: 'Authors submit papers through the conference management system with all required documents.',
    },
    {
        step: 2,
        title: 'Initial Review',
        description: 'Papers undergo initial screening for format compliance, scope relevance, and basic quality standards.',
    },
    {
        step: 3,
        title: 'Peer Review',
        description: 'Qualified papers are assigned to at least two expert reviewers for double-blind peer review.',
    },
    {
        step: 4,
        title: 'Review Assessment',
        description: 'Review committee evaluates reviewer feedback and makes acceptance recommendations.',
    },
    {
        step: 5,
        title: 'Author Notification',
        description: 'Authors receive notification of acceptance, rejection, or request for revisions.',
    },
    {
        step: 6,
        title: 'Final Submission',
        description: 'Accepted papers are revised based on reviewer feedback and submitted in camera-ready format.',
    },
];

const qualityStandards = [
    'Technical accuracy and soundness',
    'Novelty and significance of contribution',
    'Clarity of presentation and writing quality',
    'Adequate literature review and citations',
    'Appropriate methodology and analysis',
    'Relevance to conference scope',
];

export default function PaperOverview() {
    return (
        <div>
            <Layout>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-conference-blue to-conference-red py-20 text-white">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Paper Overview</h1>
                        <p className="mx-auto max-w-3xl text-xl text-blue-100">
                            Understanding paper categories, submission requirements, and the review process
                        </p>
                    </div>
                </section>

                {/* Paper Categories */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-conference-blue md:text-4xl">Paper Categories</h2>
                            <p className="text-xl text-gray-600">Choose the category that best fits your research contribution</p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-3">
                            {paperCategories.map((category, index) => (
                                <Card key={index} className="border-conference-blue/20 transition-shadow duration-200 hover:shadow-lg">
                                    <CardHeader>
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-conference-blue">
                                            <category.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-center text-2xl text-conference-blue">{category.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="leading-relaxed text-gray-700">{category.description}</p>
                                        <div>
                                            <h4 className="mb-2 font-semibold text-conference-blue">Requirements:</h4>
                                            <ul className="space-y-1">
                                                {category.requirements.map((req, reqIndex) => (
                                                    <li key={reqIndex} className="flex items-start space-x-2">
                                                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-conference-red"></div>
                                                        <span className="text-sm text-gray-600">{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Review Process */}
                <section className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-conference-blue md:text-4xl">Review Process</h2>
                            <p className="text-xl text-gray-600">Our rigorous peer review ensures high-quality publications</p>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-conference-blue/20 lg:block"></div>

                            <div className="space-y-8">
                                {reviewProcess.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center ${
                                            index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        } flex-col lg:space-x-8`}
                                    >
                                        <div className="flex-1 lg:text-right">
                                            <Card className={`border-conference-blue/20 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                                                <CardHeader>
                                                    <CardTitle className="text-xl text-conference-blue">{step.title}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-gray-700">{step.description}</p>
                                                </CardContent>
                                            </Card>
                                        </div>

                                        <div className="z-10 my-4 flex h-12 w-12 items-center justify-center rounded-full bg-conference-blue text-lg font-bold text-white lg:my-0">
                                            {step.step}
                                        </div>

                                        <div className="hidden flex-1 lg:block"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
                </section>
                {/* Quality Standards */}
                <section className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div>
                                <h2 className="mb-6 text-3xl font-bold text-conference-blue md:text-4xl">Quality Standards</h2>
                                <p className="mb-8 text-xl text-gray-600">
                                    All submissions are evaluated based on the following criteria to ensure the highest quality of accepted papers.
                                </p>
                                <ul className="space-y-4">
                                    {qualityStandards.map((standard, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-conference-red">
                                                <Award className="h-3 w-3 text-white" />
                                            </div>
                                            <span className="font-medium text-gray-700">{standard}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="flex h-80 items-center justify-center rounded-lg bg-gray-200">
                                <span className="text-lg text-gray-500">Quality Assessment Illustration</span>
                            </div> */}
                        </div>
                    </div>
                </section>

                {/* Publication Information */}
                {/* <section className="bg-conference-blue py-16 text-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Publication Information</h2>
                            <p className="text-xl text-blue-100">Details about paper publication and indexing</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                                    <FileText className="h-8 w-8 text-conference-blue" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Conference Proceedings</h3>
                                <p className="text-blue-100">All accepted papers will be published in the conference proceedings</p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                                    <Search className="h-8 w-8 text-conference-blue" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">IEEE Xplore</h3>
                                <p className="text-blue-100">Proceedings will be submitted for inclusion in IEEE Xplore Digital Library</p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                                    <Award className="h-8 w-8 text-conference-blue" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Best Paper Awards</h3>
                                <p className="text-blue-100">Outstanding papers will be recognized with best paper awards</p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                                    <Users className="h-8 w-8 text-conference-blue" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Journal Extension</h3>
                                <p className="text-blue-100">Selected papers will be invited for journal publication</p>
                            </div>
                        </div>
                    </div>
                </section> */}
            </Layout>
        </div>
    );
}
