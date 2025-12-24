import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import TakingBloodImg from "@/assets/images/taking-blood.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={TakingBloodImg}
                alt="Healthcare professional providing quality medical care"
                className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay decorative circle */}
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute left-8 top-8 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Small Heading */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                Get To Know
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Welcome to NEXTMED Healthcare Platform
            </h2>

            {/* Sub Description */}
            <p className="text-lg md:text-xl text-primary font-semibold">
              Committed To Delivering High Quality Healthcare & Telemedicine Services!
            </p>

            {/* Bullet Points */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3 group/item">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                  Refreshing to get such a personal touch in healthcare services.
                </p>
              </div>
              <div className="flex items-start gap-3 group/item">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                  Seamless appointment booking with AI-powered doctor recommendations.
                </p>
              </div>
              <div className="flex items-start gap-3 group/item">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                  Complete health record management and secure video consultations.
                </p>
              </div>
            </div>

            {/* Since Section */}
            <div className="pt-6 border-t border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group/icon hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="h-8 w-8 text-primary group-hover/icon:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-2">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      NEXTMED Since
                    </p>
                    <p className="text-3xl md:text-4xl font-bold text-foreground">
                      2024
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Revolutionizing healthcare access through innovative technology. 
                    We connect patients with qualified doctors, enabling seamless 
                    appointments, AI-powered recommendations, and comprehensive health management.
                  </p>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <Link href="/about-us">
                <Button 
                  size="lg" 
                  className="group/btn hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

