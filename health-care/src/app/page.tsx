import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Heart, Shield, Users, Stethoscope } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-healthcare-secondary">⭐</span>
                <span className="text-healthcare-primary font-medium">Healthcare Reimagined</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Talk to a Doctor in your <span className="text-healthcare-secondary">Native Language</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Save time and money by talking to a board certified doctor on your phone or computer
              </p>

              {/* Language Selection */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Button
                  variant="outline"
                  className="border-healthcare-secondary text-healthcare-primary bg-transparent"
                >
                  English
                </Button>
                <Button
                  variant="outline"
                  className="border-healthcare-secondary text-healthcare-primary bg-transparent"
                >
                  Español
                </Button>
                <Button
                  variant="outline"
                  className="border-healthcare-secondary text-healthcare-primary bg-transparent"
                >
                  中文
                </Button>
                <Button
                  variant="outline"
                  className="border-healthcare-secondary text-healthcare-primary bg-transparent"
                >
                  العربية
                </Button>
              </div>

              <Link href="/signup">
                <Button size="lg" className="bg-healthcare-secondary hover:bg-healthcare-secondary/90">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Chat Interface Mockup */}
            <div className="relative">
              <Card className="max-w-md mx-auto border-healthcare-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-healthcare-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">Dr</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Dr. Sarah Chen</h3>
                      <p className="text-sm text-healthcare-primary">Family Medicine</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      "Hello! I'm here to help with your health concerns. How can I assist you today?"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat Section */}
      <section className="py-20 bg-healthcare-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">What we treat</h2>
          <p className="text-xl text-white/90 mb-12">Comprehensive healthcare services tailored to your needs</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Everyday Care",
                description: "Common health issues and routine check-ups",
              },
              {
                icon: Stethoscope,
                title: "Specialties",
                description: "Specialized medical consultations",
              },
              {
                icon: Users,
                title: "Mental Health",
                description: "Mental wellness and therapy sessions",
              },
              {
                icon: Shield,
                title: "Wellness",
                description: "Preventive care and wellness programs",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardContent className="p-8 text-center">
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-healthcare-footer text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to talk to a doctor?</h2>
          <p className="text-xl text-gray-300 mb-8">Get started with a consultation in your preferred language</p>
          <Link href="/signup">
            <Button size="lg" className="bg-healthcare-secondary hover:bg-healthcare-secondary/90">
              Start Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
