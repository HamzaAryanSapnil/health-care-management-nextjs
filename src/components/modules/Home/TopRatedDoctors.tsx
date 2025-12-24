import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { getDoctors } from "@/services/admin/doctorManagement";
import { IDoctor } from "@/types/doctor.interface";
import TopRatedDoctorCard from "./TopRatedDoctorCard";

// Revalidate every 10 minutes
export const revalidate = 600;

const TopRatedDoctors = async () => {
  // Fetch top rated doctors (limit 4, sorted by rating)
  const doctorsResponse = await getDoctors("page=1&limit=4");
  const doctors = doctorsResponse?.data || [];

  // Filter out deleted doctors and sort by averageRating (highest first), take top 4
  const topRatedDoctors = (doctors as IDoctor[])
    .filter((doctor) => !doctor.isDeleted)
    .sort((a, b) => {
      // Sort by rating: doctors with ratings first (highest first), then doctors without ratings
      const ratingA = a.averageRating || 0;
      const ratingB = b.averageRating || 0;
      if (ratingA === 0 && ratingB === 0) return 0; // Both have no rating, maintain order
      if (ratingA === 0) return 1; // A has no rating, put it last
      if (ratingB === 0) return -1; // B has no rating, put it last
      return ratingB - ratingA; // Both have ratings, sort descending
    })
    .slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            {/* Small Heading */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                Healthcare Professionals
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Fully Dedicated to Your Health & Wellness
            </h2>

            {/* Body Text */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We provide access to highly qualified medical experts across
              various specialties. Our doctors are committed to delivering
              exceptional healthcare services with personalized care and
              attention.
            </p>

            {/* Feature Lists */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 group/item">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                  Routine and preventive care
                </p>
              </div>
              <div className="flex items-start gap-3 group/item">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                  Excellence in healthcare delivery
                </p>
              </div>
              <div className="flex items-start gap-3 group/item">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                  Building a healthy environment
                </p>
              </div>
              <div className="flex items-start gap-3 group/item">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                  Comprehensive medical solutions
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/consultation">
                <Button
                  size="lg"
                  className="group/btn hover:shadow-lg transition-all duration-300"
                >
                  View All Doctors
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Section - Doctor Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {topRatedDoctors.length > 0 ? (
              topRatedDoctors.map((doctor) => (
                <TopRatedDoctorCard key={doctor.id} doctor={doctor} />
              ))
            ) : (
              <div className="col-span-2 text-center py-12 text-muted-foreground">
                <p>No doctors available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
