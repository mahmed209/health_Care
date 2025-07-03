//Patients Page
"use client"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Button } from "../components/ui/button"
import { Users, Stethoscope, Heart, Shield } from "lucide-react"
import Link from "next/link"

export default function PatientsPage() {
  const services = [
    {
      title: "Everyday care",
      icon: Users,
      items: [
        "COVID-19 Prevention",
        "Acne",
        "Allergies",
        "Arthritis",
        "Cold Symptoms",
        "Cough",
        "Diarrhea",
        "Ear Infection",
        "Fever",
        "Headache",
        "Indigestion",
        "Lice and nits",
        "Night blood pressure",
        "Nausea & vomiting",
        "Nutrition counseling",
        "Pink eye",
        "Respiratory problems",
        "Rash",
        "Sore Throat",
        "Sexual disorders",
        "Yeast infection",
        "More...",
      ],
    },
    {
      title: "Specialties",
      icon: Stethoscope,
      items: [
        "Diabetes",
        "Endocrine",
        "Eye Diseases",
        "Digestive diseases",
        "Hypertension",
        "Lung diseases",
        "Skin disorders",
        "Urology",
        "Geriatric conditions",
        "Obstetrics and Gynecology",
        "Orthopedic",
        "Rheumatology",
      ],
    },
    {
      title: "Mental health",
      icon: Heart,
      items: [
        "Anxiety",
        "Anger management",
        "ADHD",
        "Behavioural Therapy",
        "Depression",
        "Mood issues",
        "Panic attacks",
        "Post traumatic stress disorder",
        "Phobias of some",
        "Bipolar disorder",
        "Eating disorders",
        "Schizophrenia",
        "More...",
        "Substance abuse",
      ],
    },
    {
      title: "Wellness",
      icon: Shield,
      items: [
        "Food allergies",
        "General Wellness",
        "Nutritional counseling",
        "High cholesterol",
        "Health maintenance",
        "Preventive evaluations",
        "Nutritional",
        "Fitness planning",
        "Smoking cessation",
        "Weight management",
        "Annual physical",
        "Vaccination",
        "Foot care",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Telemedicine that's <span className="text-healthcare-secondary">Unique to YOU</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Our culturally aware and community oriented providers speak your language and are here for you.
          </p>
          <Link href="/book-appointment">
            <Button size="lg" className="bg-healthcare-accent hover:bg-healthcare-accent/90">
              Start your visit
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {services.map((service, index) => (
          <section key={index} className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-healthcare-accent/10 rounded-full flex items-center justify-center">
                  <service.icon className="h-10 w-10 text-healthcare-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-healthcare-secondary">{service.title}</h2>
              </div>
              <div className="w-32 h-32 bg-healthcare-accent/10 rounded-full flex items-center justify-center">
                <service.icon className="h-16 w-16 text-healthcare-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {service.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-healthcare-accent rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/book-appointment">
                <Button className="bg-healthcare-accent hover:bg-healthcare-accent/90">
                  {service.title === "Mental health" ? "Find a Provider" : "See a Doctor"}
                </Button>
              </Link>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  )
}
