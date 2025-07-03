"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

export default function PracticeRegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    specialty: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Practice registration:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            A telemedicine platform that is <span className="text-healthcare-primary">unique to your practice</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            With more patients seeking online care, equip your practice with a simple and technologically advanced
            telemedicine platform
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-healthcare-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-healthcare-primary mb-6 text-center">Request a Demo</h2>

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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="City*"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                      <Select onValueChange={(value) => setFormData({ ...formData, state: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="State(s) of Licensure*" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Select onValueChange={(value) => setFormData({ ...formData, specialty: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Primary Specialty*" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="family">Family Medicine</SelectItem>
                        <SelectItem value="internal">Internal Medicine</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="psychiatry">Psychiatry</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      type="submit"
                      className="w-full bg-healthcare-primary hover:bg-healthcare-primary/90 text-white"
                    >
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <Card className="bg-healthcare-primary text-white border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">For questions</h3>
                  <p className="mb-4">give us a call (646) 954 7697</p>
                  <p className="mb-4">or</p>
                  <p className="mb-2">Email our recruitment team</p>
                  <p className="text-blue-100">ehc2162@columbia.edu</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-healthcare-primary mb-12">
            Trusted and Recognized for Improving Health
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-6 bg-white rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-2">Columbia University</div>
                <div className="text-gray-600">Irving Medical Center</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-2">Charles B. Wang</div>
                <div className="text-gray-600">Community Health Center</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600">Columbia CFCM</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">Chinese American</div>
                <div className="text-gray-600">Medical Society</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
