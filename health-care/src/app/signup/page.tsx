"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "../components/header"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { Checkbox } from "../components/ui/checkbox"
import Link from "next/link"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with .NET Core API
    console.log("Signup attempt:", formData)
  }

  const footerLinks = [
    {
      title: "Patients",
      links: [
        { name: "How it works", href: "/how-it-works" },
        { name: "What we treat", href: "/services" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Our Providers", href: "/providers" },
        { name: "Frequently Asked Questions", href: "/faq" },
      ],
    },
    {
      title: "Businesses",
      links: [
        { name: "Become a Provider", href: "/become-provider" },
        { name: "Private Practices", href: "/private-practices" },
        { name: "Clinics", href: "/clinics" },
        { name: "Employees", href: "/employees" },
        { name: "Government", href: "/government" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Our Team", href: "/team" },
        { name: "Investors", href: "/investors" },
        { name: "News and Media", href: "/news" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Employee Login", href: "/employee-login" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of use", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Informed Consent Disclaimer", href: "/consent" },
        { name: "Notice of Non-Discrimination Compliance", href: "/non-discrimination" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Signup Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome to <span className="text-healthcare-secondary">Cloud Health Care</span>
            </h1>
            <p className="text-gray-600">Let's get started!</p>
          </div>

          <Card className="border-healthcare-secondary/20 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  type="date"
                  placeholder="Date of Birth* (MM/DD/YYYY)"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  required
                />

                <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  You will use your phone number or email to log in
                </div>

                <Input
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <Input
                  type="password"
                  placeholder="Password*"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    By signing up you agree to Cloud Health Care's{" "}
                    <Link href="/terms" className="text-healthcare-primary hover:underline">
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-healthcare-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-healthcare-secondary hover:bg-healthcare-secondary/90"
                  disabled={!formData.agreeToTerms}
                >
                  Sign Up
                </Button>
              </form>

              <div className="mt-6 text-center space-y-2">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-healthcare-secondary hover:underline">
                    Sign In
                  </Link>
                </p>
                <p className="text-sm text-gray-500">
                  If you require assistance making an account, call <span className="font-medium">(646) 954 7057</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-healthcare-primary transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="bg-healthcare-footer text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-healthcare-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">CH</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Cloud Health Care</h3>
              <p className="text-sm text-gray-300">is making your life easy!</p>
            </div>
          </div>
          <p className="text-center text-gray-300">2020 Cloud Health Care, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
