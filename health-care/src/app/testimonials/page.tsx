import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Star, Play } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Raheela, NY",
      rating: 5,
      text: "Not knowing English is my biggest fear. I would not go to the doctor without my husband. Onasi Tele Care has changed all of this as I can see a doctor who speaks Urdu, and my husband does not have to take a day off for my appointment.",
      hasVideo: false,
    },
    {
      name: "Farhin, NY",
      rating: 5,
      text: "Going to doctor was always scary because I have trouble communicating in English. With Onasi Tele Care, I don't have to worry about language issues. The Onasi Tele Care doctor spoke my language. My experience was simple, quick and private.",
      hasVideo: false,
    },
    {
      name: "Sarah, CT",
      rating: 5,
      text: "The service was excellent and the doctor was very professional.",
      hasVideo: true,
    },
    {
      name: "Jorge, NJ",
      rating: 5,
      text: "Great experience with multilingual healthcare support.",
      hasVideo: true,
    },
    {
      name: "Zhang, CT",
      rating: 5,
      text: "Finally found healthcare in my native language. Highly recommended!",
      hasVideo: true,
    },
    {
      name: "Ali, NY",
      rating: 5,
      text: "Professional service with cultural understanding. Very satisfied.",
      hasVideo: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See what our <span className="text-healthcare-primary">users have said!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Onasi TeleCare is improving the healthcare experience for everyone
          </p>

          <div className="flex justify-center space-x-4">
            <Button className="bg-healthcare-primary hover:bg-healthcare-primary/90">Share your experience</Button>
            <Link href="/signup">
              <Button className="bg-healthcare-primary hover:bg-healthcare-primary/90">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Featured Testimonials */}
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <Card key={index} className="border-healthcare-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-healthcare-secondary font-medium mb-2">
                      Healthcare experience got better
                    </p>
                    <p className="text-gray-700">"{testimonial.text}"</p>
                  </div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {testimonials.slice(2).map((testimonial, index) => (
              <Card key={index} className="border-healthcare-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                      {testimonial.hasVideo ? (
                        <Play className="h-8 w-8 text-gray-600" />
                      ) : (
                        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{testimonial.name}</h3>
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/signup">
              <Button size="lg" className="bg-healthcare-primary hover:bg-healthcare-primary/90">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
