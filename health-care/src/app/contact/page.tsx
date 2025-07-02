"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Search } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with .NET Core API
    console.log("Form submitted:", formData)
  }

  const faqCategories = [
    {
      title: "General",
      questions: [
        {
          q: "What is the price per visit?",
          a: "Our consultation fees vary by provider and service type. Please check with your specific provider for pricing details.",
        },
        {
          q: "How does language support work?",
          a: "We offer healthcare services in multiple languages including English, Spanish, Chinese, and Arabic.",
        },
        {
          q: "How long is a visit?",
          a: "Typical consultations last 15-30 minutes, depending on the complexity of your health concern.",
        },
        {
          q: "My language is not written here!",
          a: "We're constantly expanding our language support. Please contact us to inquire about your specific language needs.",
        },
        {
          q: "What insurances are accepted?",
          a: "We accept most major insurance plans. Please verify coverage with your insurance provider.",
        },
      ],
    },
    {
      title: "Providers",
      questions: [
        {
          q: "How can I join?",
          a: "You can apply to join our provider network by completing our online application and meeting our credentialing requirements.",
        },
        {
          q: "How much does it cost to join?",
          a: "There are no upfront costs to join our provider network. We operate on a revenue-sharing model.",
        },
        {
          q: "What is the policy on language?",
          a: "Providers should be fluent in at least one of our supported languages and culturally competent.",
        },
        {
          q: "How would I get paid?",
          a: "Payments are processed weekly via direct deposit after patient consultations are completed.",
        },
        {
          q: "What documents are needed to apply?",
          a: "You'll need medical licenses, malpractice insurance, CV, and other standard credentialing documents.",
        },
      ],
    },
    {
      title: "My Account",
      questions: [
        {
          q: "How do I make an account?",
          a: "Click 'Join Now' and follow the registration process to create your patient account.",
        },
        {
          q: "How do I cancel my appointment?",
          a: "You can cancel appointments through your patient portal up to 24 hours before your scheduled time.",
        },
      ],
    },
    {
      title: "Prescription",
      questions: [
        {
          q: "How do I change my pharmacy?",
          a: "You can update your preferred pharmacy in your account settings or inform your provider during consultation.",
        },
        {
          q: "How can I get refills?",
          a: "Request refills through your patient portal or contact your provider directly.",
        },
        {
          q: "Which prescriptions are not allowed?",
          a: "Controlled substances and certain medications require in-person evaluation and cannot be prescribed via telemedicine.",
        },
      ],
    },
    {
      title: "Billing",
      questions: [
        {
          q: "How do I pay for my visit?",
          a: "Payment is processed automatically using your saved payment method after each consultation.",
        },
        {
          q: "Is my information secure?",
          a: "Yes, we use bank-level encryption and are HIPAA compliant to protect your personal and medical information.",
        },
        {
          q: "What insurances are accepted?",
          a: "We accept most major insurance plans including Medicare and Medicaid in participating states.",
        },
      ],
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
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Contact <span className="text-healthcare-secondary">Us</span>
              </h1>
              <p className="text-xl text-gray-600">We are here for you</p>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Healthcare support"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-healthcare-secondary/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <Select onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="General Inquiry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="provider">Provider Application</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Type your message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <Button type="submit" className="w-full bg-healthcare-secondary hover:bg-healthcare-secondary/90">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-healthcare-secondary">Questions</span>
            </h2>

            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder="Search FAQ..." className="pl-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqCategories.map((category, index) => (
              <Card key={index} className="border-healthcare-secondary/20">
                <CardHeader>
                  <CardTitle className="text-healthcare-secondary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    {category.questions.map((item, qIndex) => (
                      <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`}>
                        <AccordionTrigger className="text-left text-sm">{item.q}</AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-600">{item.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  {category.questions.length > 3 && (
                    <Button variant="link" className="text-healthcare-primary p-0 h-auto">
                      (View All)
                    </Button>
                  )}
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
