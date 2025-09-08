import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, Users, Award } from "lucide-react";

const paperCategories = [
  {
    icon: FileText,
    title: "Research Papers",
    description:
      "Original research contributions presenting novel findings, methodologies, or theoretical advances in mechanical manufacturing sciences.",
    requirements: [
      "Original research with significant contribution",
      "Maximum 8 pages in IEEE format",
      "Comprehensive literature review",
      "Clear methodology and results",
      "Statistical analysis where applicable",
    ],
  },
  {
    icon: Search,
    title: "Review Papers",
    description:
      "Comprehensive surveys of current state-of-the-art in specific areas of mechanical manufacturing, identifying trends and future directions.",
    requirements: [
      "Systematic review of existing literature",
      "Maximum 12 pages in IEEE format",
      "Critical analysis of current research",
      "Identification of research gaps",
      "Future research directions",
    ],
  },
  {
    icon: Users,
    title: "Case Studies",
    description:
      "Practical applications and real-world implementations showcasing successful solutions in industrial manufacturing environments.",
    requirements: [
      "Real-world industrial application",
      "Maximum 6 pages in IEEE format",
      "Problem-solution approach",
      "Quantifiable results and benefits",
      "Lessons learned and recommendations",
    ],
  },
];

const reviewProcess = [
  {
    step: 1,
    title: "Initial Submission",
    description:
      "Authors submit papers through the conference management system with all required documents.",
  },
  {
    step: 2,
    title: "Initial Review",
    description:
      "Papers undergo initial screening for format compliance, scope relevance, and basic quality standards.",
  },
  {
    step: 3,
    title: "Peer Review",
    description:
      "Qualified papers are assigned to at least two expert reviewers for double-blind peer review.",
  },
  {
    step: 4,
    title: "Review Assessment",
    description:
      "Review committee evaluates reviewer feedback and makes acceptance recommendations.",
  },
  {
    step: 5,
    title: "Author Notification",
    description:
      "Authors receive notification of acceptance, rejection, or request for revisions.",
  },
  {
    step: 6,
    title: "Final Submission",
    description:
      "Accepted papers are revised based on reviewer feedback and submitted in camera-ready format.",
  },
];

const qualityStandards = [
  "Technical accuracy and soundness",
  "Novelty and significance of contribution",
  "Clarity of presentation and writing quality",
  "Adequate literature review and citations",
  "Appropriate methodology and analysis",
  "Relevance to conference scope",
];

export default function PaperOverview() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-conference-blue to-conference-blue/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Paper Overview
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Understanding paper categories, submission requirements, and the
            review process
          </p>
        </div>
      </section>

      {/* Paper Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
              Paper Categories
            </h2>
            <p className="text-xl text-gray-600">
              Choose the category that best fits your research contribution
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {paperCategories.map((category, index) => (
              <Card
                key={index}
                className="border-conference-blue/20 hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-conference-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-conference-blue text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {category.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-conference-blue mb-2">
                      Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {category.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-conference-red rounded-full mt-2 flex-shrink-0"></div>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
              Review Process
            </h2>
            <p className="text-xl text-gray-600">
              Our rigorous peer review ensures high-quality publications
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-conference-blue/20 hidden lg:block"></div>

            <div className="space-y-8">
              {reviewProcess.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:space-x-8`}
                >
                  <div className="flex-1 lg:text-right">
                    <Card
                      className={`border-conference-blue/20 ${
                        index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                      }`}
                    >
                      <CardHeader>
                        <CardTitle className="text-xl text-conference-blue">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="w-12 h-12 bg-conference-blue rounded-full flex items-center justify-center text-white font-bold text-lg z-10 my-4 lg:my-0">
                    {step.step}
                  </div>

                  <div className="flex-1 lg:block hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-6">
                Quality Standards
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                All submissions are evaluated based on the following criteria to
                ensure the highest quality of accepted papers.
              </p>
              <ul className="space-y-4">
                {qualityStandards.map((standard, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-conference-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {standard}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Quality Assessment Illustration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Information */}
      <section className="py-16 bg-conference-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Publication Information
            </h2>
            <p className="text-xl text-blue-100">
              Details about paper publication and indexing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-conference-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Conference Proceedings
              </h3>
              <p className="text-blue-100">
                All accepted papers will be published in the conference
                proceedings
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-conference-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IEEE Xplore</h3>
              <p className="text-blue-100">
                Proceedings will be submitted for inclusion in IEEE Xplore
                Digital Library
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-conference-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Paper Awards</h3>
              <p className="text-blue-100">
                Outstanding papers will be recognized with best paper awards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-conference-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Journal Extension</h3>
              <p className="text-blue-100">
                Selected papers will be invited for journal publication
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
