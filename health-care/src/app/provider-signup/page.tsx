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
import { Checkbox } from "../components/ui/checkbox"
import { Badge } from "../components/ui/badge"
import { X } from "lucide-react"

export default function ProviderSignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    medicalLicense: "",
    specialty: "",
    yearsExperience: "",
    languages: [] as string[],
    education: "",
    certifications: "",
    availability: "",
    bio: "",
    agreeToTerms: false,
  })

  const [selectedLanguage, setSelectedLanguage] = useState("")

  const availableLanguages = [
    "English",
    "Spanish",
    "Mandarin",
    "Arabic",
    "Hindi",
    "French",
    "Portuguese",
    "Russian",
    "Korean",
    "Japanese",
    "Italian",
    "German",
  ]

  const addLanguage = (language: string) => {
    if (language && !formData.languages.includes(language)) {
      setFormData({
        ...formData,
        languages: [...formData.languages, language],
      })
      setSelectedLanguage("")
    }
  }

  const removeLanguage = (language: string) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter((lang) => lang !== language),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Provider signup:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-healthcare-secondary">Provider Network</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Help us bridge language barriers in healthcare and serve diverse communities
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-healthcare-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl text-healthcare-primary text-center">Provider Application</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
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
                    <Input
                      type="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Input
                      placeholder="Medical License Number*"
                      value={formData.medicalLicense}
                      onChange={(e) => setFormData({ ...formData, medicalLicense: e.target.value })}
                      required
                    />
                    <Select onValueChange={(value) => setFormData({ ...formData, specialty: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Primary Specialty*" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="family">Family Medicine</SelectItem>
                        <SelectItem value="internal">Internal Medicine</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="psychiatry">Psychiatry</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="dermatology">Dermatology</SelectItem>
                        <SelectItem value="endocrinology">Endocrinology</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select onValueChange={(value) => setFormData({ ...formData, yearsExperience: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Years of Experience*" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="4-7">4-7 years</SelectItem>
                        <SelectItem value="8-15">8-15 years</SelectItem>
                        <SelectItem value="15+">15+ years</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="space-y-2">
                      <div className="flex space-x-2">
                        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                          <SelectTrigger>
                            <SelectValue placeholder="Add Languages*" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableLanguages.map((lang) => (
                              <SelectItem key={lang} value={lang}>
                                {lang}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Button
                          type="button"
                          onClick={() => addLanguage(selectedLanguage)}
                          className="bg-healthcare-accent hover:bg-healthcare-accent/90"
                        >
                          Add
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formData.languages.map((lang) => (
                          <Badge
                            key={lang}
                            variant="secondary"
                            className="bg-healthcare-accent/10 text-healthcare-primary"
                          >
                            {lang}
                            <button
                              type="button"
                              onClick={() => removeLanguage(lang)}
                              className="ml-2 hover:text-red-600"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education & Certifications */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Education & Certifications</h3>
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Medical Education (Medical School, Residency, Fellowship)*"
                      rows={3}
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      required
                    />
                    <Textarea
                      placeholder="Board Certifications and Additional Qualifications"
                      rows={2}
                      value={formData.certifications}
                      onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                    />
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
                  <Select onValueChange={(value) => setFormData({ ...formData, availability: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred Schedule*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time (40+ hours/week)</SelectItem>
                      <SelectItem value="part-time">Part-time (20-39 hours/week)</SelectItem>
                      <SelectItem value="flexible">Flexible (10-19 hours/week)</SelectItem>
                      <SelectItem value="weekends">Weekends only</SelectItem>
                      <SelectItem value="evenings">Evenings only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Bio */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Bio</h3>
                  <Textarea
                    placeholder="Tell us about yourself, your approach to patient care, and why you're interested in telemedicine (optional)"
                    rows={4}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  />
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to Onasi Tele Care's Provider Terms of Service and Privacy Policy. I understand that my
                    application will be reviewed and I may be contacted for additional information or an interview.*
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-healthcare-secondary hover:bg-healthcare-secondary/90"
                  disabled={!formData.agreeToTerms}
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-healthcare-primary mb-8">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-healthcare-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-healthcare-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Review</h3>
              <p className="text-gray-600">
                Our team will review your application and credentials within 3-5 business days.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-healthcare-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-healthcare-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-gray-600">
                Qualified candidates will be invited for a virtual interview to discuss their experience and goals.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-healthcare-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-healthcare-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Onboarding</h3>
              <p className="text-gray-600">
                Approved providers will complete our onboarding process and platform training.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
