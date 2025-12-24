"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I book an appointment with a doctor?",
    answer:
      "You can book an appointment in three easy ways: 1) Use our AI-powered doctor finder by describing your symptoms, 2) Browse doctors by specialty on the consultation page, or 3) Search for a specific doctor by name. Once you find a suitable doctor, select an available time slot and confirm your appointment.",
  },
  {
    question: "How does the AI doctor recommendation feature work?",
    answer:
      "Our AI-powered system analyzes your symptoms and medical history to match you with the most suitable doctors from our network. Simply describe your symptoms in detail, and our AI will recommend qualified doctors based on their expertise, ratings, and availability. This helps you find the right specialist quickly and efficiently.",
  },
  {
    question: "Can I have a video consultation with doctors?",
    answer:
      "Yes! We offer secure video consultations with our qualified doctors. This feature allows you to consult with healthcare professionals from the comfort of your home, saving time and reducing the need for in-person visits. Video consultations are perfect for follow-ups, minor health concerns, and routine check-ups.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept payments through our integrated Stripe payment gateway, which supports all major credit and debit cards. The payment is processed securely and you'll receive a confirmation email with the transaction details. Payment is required at the time of booking your appointment.",
  },
  {
    question: "How can I access my medical records and prescriptions?",
    answer:
      "All your medical records, prescriptions, and health data are stored securely in your patient dashboard. Once you log in, you can access your appointment history, download prescriptions, view lab reports, and manage your health information all in one place. Your data is encrypted and protected according to healthcare privacy standards.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes, you can cancel or reschedule your appointment through your dashboard or by contacting our support team. We recommend canceling or rescheduling at least 24 hours in advance to avoid any cancellation fees. You can easily manage all your appointments from the 'My Appointments' section in your account.",
  },
  {
    question: "What should I do in case of a medical emergency?",
    answer:
      "In case of a medical emergency, please call your local emergency services immediately. Our platform is designed for routine healthcare services and non-emergency consultations. For life-threatening situations, do not wait for an online appointment - seek immediate medical attention at the nearest emergency room or call emergency services.",
  },
  {
    question: "Are the doctors on your platform verified and qualified?",
    answer:
      "Absolutely. All doctors on our platform are verified medical professionals with valid licenses and credentials. We verify each doctor's qualifications, specialties, and registration numbers before they join our network. You can view each doctor's credentials, experience, patient reviews, and ratings on their profile page before booking an appointment.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center w-full mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <p className="text-sm font-medium text-primary uppercase tracking-wide">
              Got Questions?
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Find answers to common questions about our healthcare platform and
            services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left"
                aria-expanded={openIndex === index}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      {openIndex === index && (
                        <div className="mt-4 ml-8">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </button>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center text-primary hover:underline font-medium transition-colors"
          >
            Contact Us
            <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

