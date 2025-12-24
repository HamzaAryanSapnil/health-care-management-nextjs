"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import samplePhoto from "../../../assets/images/hero-doctor.jpg";

const testimonials = [
  {
    name: "Robert Fox",
    role: "Patient",
    image: samplePhoto,
    quote:
      "The care and professionalism I received were outstanding. The doctors were knowledgeable and the staff was incredibly supportive throughout my treatment.",
    rating: 5,
  },
  {
    name: "Jane Cooper",
    role: "Patient",
    image: samplePhoto,
    quote:
      "A seamless experience from booking an appointment to the consultation. The use of technology for prescriptions and follow-ups is very convenient.",
    rating: 5,
  },
  {
    name: "Wade Warren",
    role: "Patient",
    image: samplePhoto,
    quote:
      "I highly recommend their services. The specialists are top-notch, and they truly focus on preventive care which has greatly improved my health.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Patient",
    image: samplePhoto,
    quote:
      "The AI-powered doctor recommendation feature helped me find the perfect specialist for my condition. The video consultation option saved me so much time and hassle.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Patient",
    image: samplePhoto,
    quote:
      "Excellent healthcare platform! The appointment booking process is smooth, and the electronic prescription system makes it easy to manage my medications.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Patient",
    image: samplePhoto,
    quote:
      "As someone with a busy schedule, the flexibility of video consultations and online appointment booking has been a game-changer. Highly professional service!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 2000, // 4 seconds
      stopOnInteraction: true,
      stopOnFocusIn: false,
    })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Start autoplay when API is ready
    // Use setTimeout to ensure plugin is fully initialized
    const timer = setTimeout(() => {
      try {
        autoplayPlugin.current.play();
      } catch (error) {
        console.error("Autoplay error:", error);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [api]);

  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            What Our Client Says
          </h2>
          <p className="text-muted-foreground mt-4">
            We are committed to providing you with the best medical and
            healthcare services.
          </p>
        </div>

        <div
          className="container mx-auto relative"
          onMouseEnter={() => {
            if (autoplayPlugin.current) {
              autoplayPlugin.current.stop();
            }
          }}
          onMouseLeave={() => {
            if (autoplayPlugin.current) {
              autoplayPlugin.current.reset();
            }
          }}
        >
          <Carousel
            setApi={setApi}
            plugins={[autoplayPlugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="bg-background relative h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <Quote
                        className="absolute top-4 left-4 text-primary opacity-20"
                        size={48}
                      />
                      <div className="relative z-10">
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="rounded-full object-cover"
                          />
                          <div className="ml-4">
                            <h4 className="font-bold text-foreground">
                              {testimonial.name}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {testimonial.role}
                            </p>
                            <div className="flex mt-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="text-yellow-400 fill-current"
                                  size={16}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-0 lg:-left-12" />
            <CarouselNext className="hidden md:flex right-0 lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
