import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle2 } from "lucide-react";
import { IDoctor } from "@/types/doctor.interface";
import { getInitials } from "@/lib/formatters";

interface TopRatedDoctorCardProps {
  doctor: IDoctor;
}

const TopRatedDoctorCard = ({ doctor }: TopRatedDoctorCardProps) => {
  const primarySpecialty =
    doctor.doctorSpecialties?.[0]?.specialities?.title || "General";

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-primary/10">
        {doctor.profilePhoto ? (
          <Image
            src={doctor.profilePhoto as string}
            alt={doctor.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10">
            <Avatar className="h-32 w-32">
              <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
                {getInitials(doctor.name)}
              </AvatarFallback>
            </Avatar>
          </div>
        )}
        {/* Icon Overlay */}
        <div className="absolute bottom-4 right-4 bg-card rounded-lg p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <CheckCircle2 className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          Dr. {doctor.name}
        </h3>
        <p className="text-sm text-primary font-medium mb-3">
          {doctor.designation}
        </p>
        {primarySpecialty && (
          <Badge variant="secondary" className="mb-3">
            {primarySpecialty}
          </Badge>
        )}
        <div className="flex items-center gap-2 text-sm">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-foreground">
            {doctor.averageRating?.toFixed(1) || "N/A"}
          </span>
          <span className="text-muted-foreground">
            ({doctor.experience || 0} years exp)
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopRatedDoctorCard;

