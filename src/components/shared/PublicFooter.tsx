import Link from "next/link";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function PublicFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-3">NEXTMED</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Revolutionizing healthcare access through innovative technology.
              We connect patients with qualified doctors, enabling seamless
              appointments, AI-powered recommendations, and comprehensive health
              management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:justify-self-end">
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/consultation"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:justify-self-end">
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/medicine"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Medicine
                </Link>
              </li>
              <li>
                <Link
                  href="/health-plans"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Health Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/diagnostics"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link
                  href="/ngos"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  NGOs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:justify-self-end">
            <h3 className="font-semibold mb-3">Contact & Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hamzaswapnil@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform group-hover:text-[#4285F4]" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801303539006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform group-hover:text-[#25D366]" />
                  <span>WhatsApp</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hamzaaryansapnil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <FaLinkedin className="h-4 w-4 group-hover:scale-110 transition-transform group-hover:text-[#0077B5]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/HamzaAryanSapnil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <FaGithub className="h-4 w-4 group-hover:scale-110 transition-transform group-hover:text-[#181717]" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} NEXTMED. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/about-us"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/about-us"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <a
                href="https://nextjs-portfolio-delta-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-foreground transition-colors group"
              >
                <span>Developer Portfolio</span>
                <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;
