"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HeroProps } from "@/types/heroProps";
import { LargeSparkleIcon } from "@/assets/icons/SparkleIcon";
import { ServiceCard } from "./ServiceCard";
import VideoConsultancyImg from '@/assets/images/consultancy.jpg'
import DoctorCheckingPatientImg from '@/assets/images/doctor-checking.jpg'
import AIDoctorSuggestionsImg from '@/assets/images/ai-suggestions.jpg'
import CustomerServiceImg from '@/assets/images/customer-service.jpg'
import PaymentServiceImg from '@/assets/images/payment.jpg'
import HeroBgImg from '@/assets/images/hero-bg.png'

export function Hero({
  heading = "Book a Doctor's Appointment in Just 10 Minutes with Sasthya Seba",
  description = "Say goodbye to endless phone calls and long queues. Book doctors' appointments, video consultations, ambulance service, manage medical records, and more. Take the first step towards better health.",
  formCard = {
    title: "AI Doctor Finder",
    symptomLabel: "What are your symptoms?",
    symptomPlaceholder: "e.g., headache, fever, cough",
    specialtyLabel: "Preferred specialty",
    specialtyOptions: [
      "General Physician",
      "Cardiologist",
      "Dermatologist",
      "Pediatrician",
      "Orthopedic",
    ],
    defaultSpecialty: "General Physician",
    submitText: "Get AI Recommendations",
    footerText:
      "✨ Powered by advanced AI algorithms for accurate doctor matching",
  },
  services = [
    {
      title: "Video Consultancy",
      description: "Consult with best doctors through video call.",
      imageUrl: VideoConsultancyImg.src as string,
    },
    {
      title: "Chamber Appointment",
      description: "Book your appointment easily with few clicks.",
      imageUrl: DoctorCheckingPatientImg.src as string,
    },
    {
      title: "AI Doctor Suggestions",
      description: "Give your syntoms, We will suggest doctors using AI whom are inside of our organization.",
      imageUrl: AIDoctorSuggestionsImg.src as string,
    },
    {
      title: "Customer Service",
      description: "24/7 Emergency Customer Service.",
      imageUrl: CustomerServiceImg.src as string,
    },
    {
      title: "Stripe Payment Service",
      description: "You can pay using stripe from anywhere of this country",
      imageUrl: PaymentServiceImg.src as string,
    },
  ],
}: HeroProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      symptoms: formData.get("symptoms") as string,
      specialty: formData.get("specialty") as string,
    };
    formCard.onSubmit?.(data);
  };

  return (
    <div
      className="w-full relative bg-blue-50 "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroBgImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative">
        {/* Section 1: Top Section - Heading, Description, and AI Search Form */}
        <div className="flex flex-col md:flex-row md:items-start items-center gap-x-6 space-y-8 mb-16">
          {/* Heading */}
          <div className="space-y-4">
            <h4 className="text-white/70 text-3xl tracking-widest font-bold font-sue-ellen-francisco">
              {" "}
              Health-Care-Service-With-AI
            </h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-start text-white max-w-4xl leading-tight">
              {heading}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-start text-white/70 max-w-3xl">
              {description}
            </p>
          </div>

          {/* AI Search Form Card - Centered */}
          <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            {/* Card Header */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[20.4px] leading-6 font-semibold">
                {formCard.title}
              </h2>
              {/* Remove className prop, as LargeSparkleIcon does not accept it */}
              <span className="size-6 text-primary">
                <LargeSparkleIcon />
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Symptoms Input */}
              <div className="space-y-2">
                <Label
                  htmlFor="symptoms"
                  className="text-[11.9px] text-gray-700"
                >
                  {formCard.symptomLabel}
                </Label>
                <Input
                  id="symptoms"
                  name="symptoms"
                  placeholder={formCard.symptomPlaceholder}
                  className="h-[49.787px] rounded-xl border-gray-300"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="h-[59.986px] w-full rounded-xl bg-primary text-[15.3px] hover:bg-primary/90"
              >
                {formCard.submitText}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <p className="text-center text-[11.9px] leading-5 text-gray-600">
                {formCard.footerText}
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
