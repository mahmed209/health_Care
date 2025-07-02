import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { DollarSign, Users, User, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProvidersPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Increase Earning",
      description: "Earn 50% more in more consultations, without any of the overhead costs.",
      detail: "Enjoy the benefits of our competitive pricing.",
    },
    {
      icon: Users,
      title: "Improve Rapport",
      description: "Open the lines of patient cultural cultures you can connect with.",
      detail: "Provide care in patients' native language you both speak.",
    },
    {
      icon: User,
      title: "User Friendly Platform",
      description: "Simple and technologically advanced platform for providers.",
      detail: "A platform designed to help providers deliver better care.",
    },
    {
      icon: Briefcase,
      title: "Reduce Workload",
      description: "Well-integrated EHR and Billing Services.",
      detail: "Our integrated systems let you focus on what you do best.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                We welcome you to serve your{" "}
                <span className="text-healthcare-secondary">community in your native language</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Make your own schedule and earn from the comfort of your home.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Healthcare provider"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-healthcare-secondary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-healthcare-secondary mb-4">Join our team of providers</h2>
                <p className="text-gray-600 mb-6">
                  Help us reduce disparities in healthcare and improve health outcomes by providing healthcare equity.
                </p>
                <div className="mb-6">
                  <span className="text-healthcare-primary font-medium">🏥 Healthcare team</span>
                </div>
                <Link href="/provider-signup">
                  <Button className="w-full bg-healthcare-secondary hover:bg-healthcare-secondary/90">
                    Join our team
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-healthcare-secondary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-healthcare-secondary mb-4">
                  Use Cloud Health Care telemedicine for your practice
                </h2>
                <p className="text-gray-600 mb-6">
                  Help us reduce healthcare disparity by offering your patients access to telemedicine in their native
                  language.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Telemedicine platform"
                  width={300}
                  height={200}
                  className="rounded-lg mb-6"
                />
                <Link href="/integrate-practice">
                  <Button className="w-full bg-healthcare-secondary hover:bg-healthcare-secondary/90">
                    Integrate your practice today
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-healthcare-secondary mb-4">Benefits we offer!</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-healthcare-secondary/20 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-healthcare-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-healthcare-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <p className="text-sm text-healthcare-primary">{benefit.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
