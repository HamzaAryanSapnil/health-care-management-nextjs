import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Github,
} from "lucide-react";
import ContactForm from "@/components/modules/Contact/ContactForm";

export const dynamic = "force-static";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Get In Touch
        </h1>
        <p className="text-xl text-muted-foreground">
          Have questions or want to collaborate? I'd love to hear from you!
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out through any of these channels. I typically
              respond within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <CardContent className="p-6">
                <a
                  href="mailto:hamzaswapnil@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      hamzaswapnil@gmail.com
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <CardContent className="p-6">
                <a
                  href="https://wa.me/8801303539006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      +880 1303 539 006
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <CardContent className="p-6">
                <a
                  href="https://www.linkedin.com/in/hamzaaryansapnil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Connect with me on LinkedIn
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </CardContent>
            </Card>

            {/* Portfolio */}
            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <CardContent className="p-6">
                <a
                  href="https://nextjs-portfolio-delta-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Portfolio Website</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      View my projects and experience
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </CardContent>
            </Card>

            {/* GitHub Profile */}
            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <CardContent className="p-6">
                <a
                  href="https://github.com/HamzaAryanSapnil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Check out my code repositories
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUsPage;
