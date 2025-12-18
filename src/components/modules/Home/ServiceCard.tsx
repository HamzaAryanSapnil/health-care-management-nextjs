import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: StaticImageData | string; // Optional for future image support
  icon?: React.ReactNode; // Optional icon as fallback
}

export function ServiceCard({
  title,
  description,
  imageUrl,
  icon,
}: ServiceCardProps) {
  return (
    <Card className="overflow-hidden p-0 flex flex-col">
      {/* Image/Icon Section - Top with bright blue background */}
      <div className="w-full bg-primary flex items-center justify-center aspect-square min-h-[150px]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        ) : icon ? (
          <div className="text-primary-foreground">{icon}</div>
        ) : (
          <div className="text-primary-foreground text-sm opacity-80">
            {title}
          </div>
        )}
      </div>

      {/* Content Section - Bottom with white background */}
      <CardContent className="bg-card p-4 flex-1 flex flex-col justify-center">
        <h3 className="font-semibold text-card-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

