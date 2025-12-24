import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Target,
  Users,
  Stethoscope,
  Calendar,
  FileText,
  BarChart3,
  UserCog,
  Clock,
  Heart,
  CreditCard,
  MessageSquare,
  Star,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Server,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfileImage from "@/assets/images/profile.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const dynamic = "force-static";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          About NEXTMED
        </h1>
        <p className="text-xl text-muted-foreground">
          Revolutionizing Healthcare Access Through Technology
        </p>
      </div>

      {/* Mission Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Target className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">Our Mission</h2>
        </div>
        <Card className="border-primary/20">
          <CardContent className="p-8">
            <div className="space-y-4 text-lg">
              <p>
                NEXTMED is designed to solve critical real-world healthcare
                challenges by bridging the gap between patients and healthcare
                providers through innovative technology solutions.
              </p>
              <div className="space-y-3 mt-6">
                <h3 className="text-xl font-semibold">Problems We Solve:</h3>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>
                    <strong className="text-foreground">
                      Long Waiting Times:
                    </strong>{" "}
                    Eliminate endless phone calls and long queues by enabling
                    instant online appointment booking
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Limited Access to Healthcare:
                    </strong>{" "}
                    Provide 24/7 access to healthcare services through video
                    consultations and remote doctor suggestions
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Fragmented Health Records:
                    </strong>{" "}
                    Centralize medical records, prescriptions, and health data
                    in one secure platform
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Difficulty Finding Right Doctors:
                    </strong>{" "}
                    Use AI-powered matching to connect patients with the most
                    suitable doctors based on symptoms and medical history
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Payment Complexity:
                    </strong>{" "}
                    Streamline payment processing with integrated Stripe payment
                    gateway for seamless transactions
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Lack of Transparency:
                    </strong>{" "}
                    Enable patients to view doctor ratings, reviews, and
                    qualifications before booking appointments
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Overview</h2>
        <Card>
          <CardContent className="p-8">
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                NEXTMED is a comprehensive full-stack healthcare management
                platform built with Next.js 16 and TypeScript. The platform
                connects patients with healthcare providers, enabling seamless
                appointment booking, AI-powered doctor matching, video
                consultations, and complete health record management.
              </p>
              <p>
                Built as a portfolio project, NEXTMED demonstrates expertise in
                modern web development, including server-side rendering, RESTful
                API integration, role-based access control, and secure
                authentication systems. The platform serves three distinct user
                roles—Patients, Doctors, and Administrators—each with tailored
                dashboards and functionalities.
              </p>
              <p>
                The application leverages cutting-edge technologies including
                Next.js App Router, React Server Actions, Zod validation, Shadcn
                UI components, and integrates with external services like Stripe
                for payments and AI services for intelligent doctor
                recommendations.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Platform Features</h2>

        {/* Admin Features */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <UserCog className="h-7 w-7 text-primary" />
            <h3 className="text-2xl font-semibold">Admin Features</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <BarChart3 className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Dashboard & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive system-wide statistics including total
                  appointments, patients, doctors, admins, payments, and revenue
                  tracking with visual charts and graphs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <Users className="h-6 w-6 text-primary mb-2" />
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete user management system for doctors, patients, and
                  admins. Create, update, delete, and manage user profiles with
                  search and filter capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Appointment Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  View and manage all appointments across the platform. Filter
                  by status, view details, and update appointment statuses for
                  complete oversight.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <Clock className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Schedule Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create and manage available time slots for doctors. Control
                  when patients can book appointments and maintain schedule
                  availability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <Stethoscope className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Specialty Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Add, update, and manage medical specialties. Organize doctors
                  by specialties for better patient navigation and search
                  functionality.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Doctor Features */}
        <div className="space-y-4 pt-8">
          <div className="flex items-center gap-3">
            <Stethoscope className="h-7 w-7 text-primary" />
            <h3 className="text-2xl font-semibold">Doctor Features</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <BarChart3 className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Practice Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  View practice statistics including total appointments,
                  patients served, reviews received, and revenue earned with
                  visual analytics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Appointment Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  View all appointments assigned to you. Access patient
                  information, update appointment status, and manage your
                  schedule efficiently.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <Clock className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Schedule Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Manage your available time slots. Create, edit, and delete
                  schedules to control when patients can book appointments with
                  you.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <FileText className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Prescription Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create digital prescriptions for patients. Include
                  medications, dosages, and instructions. View prescription
                  history and manage all prescriptions in one place.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Patient Features */}
        <div className="space-y-4 pt-8">
          <div className="flex items-center gap-3">
            <Users className="h-7 w-7 text-primary" />
            <h3 className="text-2xl font-semibold">Patient Features</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <BarChart3 className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Personal Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track your health journey with statistics on appointments,
                  prescriptions, and reviews. Visual overview of your healthcare
                  activities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Appointment Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Browse doctors, view profiles, and book appointments easily.
                  Select time slots, make payments, and track appointment status
                  all in one place.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <Zap className="h-6 w-6 text-primary mb-2" />
                <CardTitle>AI Doctor Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get AI-powered doctor recommendations based on your symptoms.
                  Receive personalized suggestions for the best-matched doctors
                  in our network.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <FileText className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Prescription Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  View all prescriptions received from doctors. Access detailed
                  medication information, dosages, and instructions anytime,
                  anywhere.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <Heart className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Health Records</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Manage your medical history and health records. Store lab
                  reports, track vital signs, and visualize health trends over
                  time (Coming Soon).
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <Star className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Reviews & Ratings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Share your experience by leaving reviews and ratings for
                  doctors. Help other patients make informed decisions about
                  their healthcare choices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <CreditCard className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Payment Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure payment processing using Stripe. Pay for appointments
                  and services seamlessly with multiple payment options
                  available.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <MessageSquare className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Video Consultations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consult with doctors through secure video calls. Access
                  healthcare services from the comfort of your home without
                  physical visits.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Technology Stack</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Code className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Next.js 16 (App Router)</li>
                <li>• React 19</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS 4</li>
                <li>• Shadcn UI</li>
                <li>• Radix UI</li>
                <li>• Zod Validation</li>
                <li>• Recharts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Server className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Backend Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• RESTful API</li>
                <li>• JWT Authentication</li>
                <li>• Server Actions</li>
                <li>• Cookie-based Auth</li>
                <li>• Token Refresh</li>
                <li>• Role-based Access</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Database className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Services & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Stripe Payment</li>
                <li>• AI Integration</li>
                <li>• Cloudinary (Images)</li>
                <li>• PostgreSQL</li>
                <li>• Prisma ORM</li>
                <li>• Email Services</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* GitHub Repositories */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Project Repositories</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Frontend Repository */}
          <Card className="border-primary/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Frontend</CardTitle>
                  <CardDescription>Next.js Application</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Complete frontend implementation with Next.js 16, TypeScript,
                and modern UI components.
              </p>
              <a
                href="https://github.com/HamzaAryanSapnil/health-care-management-nextjs/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline font-medium group"
              >
                <FaGithub className="h-4 w-4" />
                <span>View Repository</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>

          {/* Backend Repository */}
          <Card className="border-primary/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Backend</CardTitle>
                  <CardDescription>Express.js API</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                RESTful API built with Express.js, TypeScript, Prisma ORM, and
                PostgreSQL database.
              </p>
              <a
                href="https://github.com/HamzaAryanSapnil/health-care-prisma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline font-medium group"
              >
                <FaGithub className="h-4 w-4" />
                <span>View Repository</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>

          {/* GitHub Profile */}
          <Card className="border-primary/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FaGithub className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>GitHub Profile</CardTitle>
                  <CardDescription>All repositories</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Explore all my projects, contributions, and open-source work on
                GitHub.
              </p>
              <a
                href="https://github.com/HamzaAryanSapnil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline font-medium group"
              >
                <FaGithub className="h-4 w-4" />
                <span>View Profile</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Developer Details */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Developer</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Contact Card */}
          <Card className="border-primary/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-primary/20">
                  <AvatarImage
                    src={ProfileImage.src}
                    alt="Hamza Aryan Sapnil"
                  />
                  <AvatarFallback className="text-lg">HAS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Hamza Aryan Sapnil</CardTitle>
                  <CardDescription>Full-Stack Web Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <a
                  href="mailto:hamzaswapnil@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform group-hover:text-[#4285F4]" />
                  <span>hamzaswapnil@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/8801303539006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform group-hover:text-[#25D366]" />
                  <span>+880 1303 539 006</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hamzaaryansapnil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <FaLinkedin className="h-5 w-5 group-hover:scale-110 transition-transform group-hover:text-[#0077B5]" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://github.com/HamzaAryanSapnil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <FaGithub className="h-5 w-5 group-hover:scale-110 transition-transform group-hover:text-[#181717]" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Portfolio Card */}
          <Card className="border-primary/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <ExternalLink className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Portfolio</CardTitle>
                  <CardDescription>View my other projects</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="https://nextjs-portfolio-delta-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group font-medium"
              >
                <span>Visit Portfolio Website</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-muted-foreground">
                Explore my portfolio to see more projects, skills, and
                experience in full-stack web development.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
