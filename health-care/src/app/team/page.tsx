import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Card, CardContent } from "../components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      specialty: "Family Medicine",
      languages: ["English", "Mandarin"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dr. Chen has over 15 years of experience in family medicine and is passionate about providing culturally competent healthcare.",
    },
    {
      name: "Dr. Ahmed Hassan",
      role: "Senior Physician",
      specialty: "Internal Medicine",
      languages: ["English", "Arabic"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specializing in internal medicine with a focus on chronic disease management and preventive care.",
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Pediatric Specialist",
      specialty: "Pediatrics",
      languages: ["English", "Spanish"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dedicated to providing comprehensive pediatric care with cultural sensitivity and family-centered approach.",
    },
    {
      name: "Dr. Raj Patel",
      role: "Mental Health Specialist",
      specialty: "Psychiatry",
      languages: ["English", "Hindi", "Gujarati"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Experienced psychiatrist focusing on culturally informed mental health treatment and therapy.",
    },
    {
      name: "Dr. Kim Lee",
      role: "Telemedicine Director",
      specialty: "Digital Health",
      languages: ["English", "Korean"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leading our telemedicine initiatives with expertise in digital health technologies and patient engagement.",
    },
    {
      name: "Dr. Elena Popov",
      role: "Women's Health Specialist",
      specialty: "Obstetrics & Gynecology",
      languages: ["English", "Russian"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Providing comprehensive women's health services with cultural understanding and personalized care.",
    },
  ]

  const leadership = [
    {
      name: "Michael Johnson",
      role: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Visionary leader with 20+ years in healthcare technology and telemedicine innovation.",
    },
    {
      name: "Jennifer Liu",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Technology expert driving our platform development and digital health solutions.",
    },
    {
      name: "David Martinez",
      role: "Chief Operating Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Operations leader ensuring seamless healthcare delivery and patient experience.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-healthcare-secondary">Team</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Dedicated healthcare professionals committed to providing culturally competent care in your native language
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-healthcare-primary mb-4">Leadership Team</h2>
            <p className="text-gray-600">Experienced leaders driving our mission forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {leadership.map((member, index) => (
              <Card key={index} className="border-healthcare-accent/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-healthcare-secondary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <button className="p-2 text-healthcare-primary hover:bg-healthcare-accent/10 rounded-full">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-healthcare-primary hover:bg-healthcare-accent/10 rounded-full">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-healthcare-primary mb-4">Our Medical Professionals</h2>
            <p className="text-gray-600">Board-certified physicians providing care in multiple languages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-healthcare-accent/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-healthcare-secondary font-medium mb-1">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Languages:</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.languages.map((lang, langIndex) => (
                          <span
                            key={langIndex}
                            className="px-3 py-1 bg-healthcare-accent/10 text-healthcare-primary text-xs rounded-full"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                    <div className="flex justify-center space-x-3">
                      <button className="p-2 text-healthcare-primary hover:bg-healthcare-accent/10 rounded-full">
                        <Linkedin className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-healthcare-primary hover:bg-healthcare-accent/10 rounded-full">
                        <Mail className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-healthcare-primary mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-healthcare-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cultural Competence</h3>
              <p className="text-gray-600">
                Understanding and respecting diverse cultural backgrounds in healthcare delivery.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-healthcare-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compassionate Care</h3>
              <p className="text-gray-600">
                Providing empathetic and personalized healthcare with genuine concern for patient wellbeing.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-healthcare-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Leveraging technology to make healthcare more accessible and effective for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
