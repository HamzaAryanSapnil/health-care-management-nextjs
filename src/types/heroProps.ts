export interface HeroProps {
  heading?: string; // Main hero heading
  description?: string; // Hero description text
  formCard?: {
    title: string;
    symptomLabel?: string;
    symptomPlaceholder?: string;
    specialtyLabel?: string;
    specialtyOptions?: string[];
    defaultSpecialty?: string;
    submitText?: string;
    footerText?: string;
    onSubmit?: (data: { symptoms: string; specialty: string }) => void;
  };
  services?: Array<{
    title: string;
    description: string;
    imageUrl?: string;
    icon?: React.ReactNode;
  }>;
}