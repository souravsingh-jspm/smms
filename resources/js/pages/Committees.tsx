import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";

const organizingCommittee = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Conference Chair",
    designation: "Dean, School of Mechanical Manufacturing Sciences",
    university: "JSPM University",
    email: "rajesh.kumar@jspm.edu.in",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Co-Chair",
    designation: "Professor, Mechanical Engineering",
    university: "JSPM University",
    email: "priya.sharma@jspm.edu.in",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Amit Patel",
    role: "Technical Program Chair",
    designation: "Associate Professor, Manufacturing Sciences",
    university: "JSPM University",
    email: "amit.patel@jspm.edu.in",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Sunita Reddy",
    role: "Publication Chair",
    designation: "Assistant Professor, Industrial Engineering",
    university: "JSPM University",
    email: "sunita.reddy@jspm.edu.in",
    image: "/placeholder.svg",
  },
];

const advisoryCommittee = [
  {
    name: "Prof. Dr. Michael Johnson",
    role: "International Advisor",
    designation: "Professor Emeritus",
    university: "MIT, USA",
    email: "mjohnson@mit.edu",
    image: "/placeholder.svg",
  },
  {
    name: "Prof. Dr. Yuki Tanaka",
    role: "Research Advisor",
    designation: "Professor, Mechanical Engineering",
    university: "Tokyo Institute of Technology, Japan",
    email: "tanaka@titech.ac.jp",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Sarah Williams",
    role: "Industry Advisor",
    designation: "Chief Technology Officer",
    university: "Advanced Manufacturing Corp.",
    email: "sarah.williams@amc.com",
    image: "/placeholder.svg",
  },
  {
    name: "Prof. Dr. Hans Mueller",
    role: "European Advisor",
    designation: "Professor, Manufacturing Technology",
    university: "Technical University of Munich, Germany",
    email: "hans.mueller@tum.de",
    image: "/placeholder.svg",
  },
];

const technicalCommittee = [
  {
    name: "Dr. Kavita Singh",
    role: "Track Chair - Advanced Manufacturing",
    designation: "Professor, Mechanical Engineering",
    university: "IIT Delhi",
    email: "kavita.singh@iitd.ac.in",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Ravi Krishnan",
    role: "Track Chair - Automation & Robotics",
    designation: "Associate Professor",
    university: "IIT Bombay",
    email: "ravi.krishnan@iitb.ac.in",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Neha Agarwal",
    role: "Track Chair - Materials Science",
    designation: "Professor, Materials Engineering",
    university: "Anna University",
    email: "neha.agarwal@annauniv.edu",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Suresh Gupta",
    role: "Track Chair - Sustainable Manufacturing",
    designation: "Professor, Environmental Engineering",
    university: "NIT Trichy",
    email: "suresh.gupta@nitt.edu",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Meera Joshi",
    role: "Track Chair - Quality Control",
    designation: "Associate Professor",
    university: "VIT University",
    email: "meera.joshi@vit.ac.in",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Ashok Kumar",
    role: "Track Chair - Industry 4.0",
    designation: "Professor, Computer Science",
    university: "BITS Pilani",
    email: "ashok.kumar@bits-pilani.ac.in",
    image: "/placeholder.svg",
  },
];

function CommitteeCard({ member }: { member: any }) {
  const initials = member.name
    .split(" ")
    .map((n: string) => n[0])
    .join("");

  return (
    <Card className="border-conference-blue/20 hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="w-16 h-16 border-2 border-conference-blue/20">
            <AvatarFallback className="bg-conference-blue text-white font-semibold text-lg">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-conference-blue mb-1">
              {member.name}
            </h3>
            <p className="text-conference-red font-medium mb-2">
              {member.role}
            </p>
            <p className="text-gray-700 text-sm mb-1">{member.designation}</p>
            <p className="text-gray-600 text-sm mb-3">{member.university}</p>
            <div className="flex items-center space-x-3">
              <a
                href={`mailto:${member.email}`}
                className="text-conference-blue hover:text-conference-blue/80 transition-colors duration-200"
              >
                <Mail size={16} />
              </a>
              <a
                href="#"
                className="text-conference-blue hover:text-conference-blue/80 transition-colors duration-200"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Committees() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-conference-blue to-conference-blue/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Committees</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Meet the distinguished experts organizing and guiding ICETMMS 2024
          </p>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
              Organizing Committee
            </h2>
            <p className="text-xl text-gray-600">
              The core team responsible for conference organization and
              management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {organizingCommittee.map((member, index) => (
              <CommitteeCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Committee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
              Advisory Committee
            </h2>
            <p className="text-xl text-gray-600">
              Distinguished international experts providing strategic guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advisoryCommittee.map((member, index) => (
              <CommitteeCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Committee */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
              Technical Committee
            </h2>
            <p className="text-xl text-gray-600">
              Subject matter experts managing technical tracks and paper reviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCommittee.map((member, index) => (
              <CommitteeCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-conference-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Interested in contributing to future conferences or joining our
            advisory board? We welcome collaboration from experts worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-conference-red hover:bg-conference-red/90 text-white font-semibold px-8 py-3 text-lg rounded-md transition-colors duration-200">
              Contact Us
            </button>
            <button className="border border-white text-white hover:bg-white/10 font-semibold px-8 py-3 text-lg rounded-md transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
