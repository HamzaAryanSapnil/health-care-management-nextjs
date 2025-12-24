"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, Stethoscope, Video } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DoctorCheckingImg from "@/assets/images/doctor-checking.jpg";
import VideoConsultancyImg from "@/assets/images/consultancy.jpg";
import AIDoctorSuggestionsImg from "@/assets/images/ai-suggestions.jpg";

const services = [
  {
    title: "Video Consultancy",
    description:
      "Consult with experienced doctors through secure video calls from the comfort of your home. Get professional medical advice without leaving your house.",
    image: VideoConsultancyImg,
    icon: Video,
  },
  {
    title: "Chamber Appointment",
    description:
      "Book in-person appointments with qualified doctors easily. Select your preferred time slot and get instant confirmation for your visit.",
    image: DoctorCheckingImg,
    icon: Stethoscope,
  },
  {
    title: "AI Doctor Suggestions",
    description:
      "Get AI-powered doctor recommendations based on your symptoms. Find the most suitable healthcare professionals for your specific needs.",
    image: AIDoctorSuggestionsImg,
    icon: HeartPulse,
  },
];

const Specialities = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && parallaxRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;

        // Calculate if section is in viewport
        if (
          scrollPosition + windowHeight > sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          const scrolled = scrollPosition - sectionTop;
          const speed = 0.3;
          setOffset(scrolled * speed);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden min-h-[800px]"
    >
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 -z-10"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <div className="relative w-full h-[120%]">
          <Image
            src={DoctorCheckingImg}
            alt="Healthcare services background"
            fill
            className="object-cover"
            quality={90}
            priority={false}
            unoptimized={false}
          />
        </div>
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                Checkout Our Services
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              What We Offer for You
            </h2>
          </div>
          <div className="flex-1 max-w-lg">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-medium">
              We provide comprehensive healthcare services designed to make
              medical care accessible, convenient, and personalized. From
              virtual consultations to in-person appointments, we&apos;ve got
              you covered.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border/50 bg-card/95 backdrop-blur-sm"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Icon Overlay */}
                <div className="absolute bottom-4 right-4 bg-card rounded-lg p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
