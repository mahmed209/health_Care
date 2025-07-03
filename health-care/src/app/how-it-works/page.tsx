import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Button } from "../components/ui/button"
import { Link2, MessageCircle, Heart, Play } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      number: "1",
      icon: Link2,
      title: "Connect",
      description: "Sign up in just a few minutes to complete your profile with some basic information",
    },
    {
      number: "2",
      icon: MessageCircle,
      title: "Communicate",
      description: "Get connected to a doctor who speaks your language and can provide you quality care",
    },
    {
      number: "3",
      icon: Heart,
      title: "Heal",
      description: "Feel better without the worries of language barriers",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How <span className="text-healthcare-primary">it works</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">See a provider of your choice in minutes</p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-healthcare-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{step.number}</span>
                  </div>
                  <div className="w-16 h-16 bg-healthcare-light rounded-full flex items-center justify-center mx-auto -mt-10 ml-12">
                    <step.icon className="h-8 w-8 text-healthcare-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-healthcare-primary mb-4">{step.title}</h3>
                <p className="text-gray-600 max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-healthcare-primary rounded-lg overflow-hidden">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <div className="flex justify-center space-x-8 mb-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                  </div>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                  </div>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                  </div>
                </div>
                <Button size="lg" className="bg-white/20 hover:bg-white/30 border border-white/30">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-sm">0:12 / 0:59</div>
          </div>

          <div className="text-center mt-8">
            <Link href="/book-appointment">
              <Button size="lg" className="bg-healthcare-primary hover:bg-healthcare-primary/90">
                Schedule your visit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
