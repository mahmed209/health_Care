//Login Page
"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "../components/header"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with .NET Core API
    console.log("Login attempt:", formData)
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

      {/* Login Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome to <span className="text-healthcare-secondary">Onasi TeleCare</span>
            </h1>
          </div>

          <Card className="border-healthcare-secondary/20 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="email"
                  placeholder="Email or Phone Number"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <Input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />

                <Button type="submit" className="w-full bg-healthcare-accent hover:bg-healthcare-accent/90">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center space-y-2">
                <p className="text-gray-600">
                  New Patient?{" "}
                  <Link href="/signup" className="text-healthcare-secondary hover:underline">
                    Sign up
                  </Link>
                </p>
                <Link href="/forgot-password" className="text-healthcare-primary hover:underline text-sm">
                  Forgot Password?
                </Link>
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
      <div className="bg-healthcare-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-14 h-14 bg-healthcare-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">OT</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Onasi TeleCare</h3>
              <p className="text-sm text-gray-300">is making your life easy!</p>
            </div>
          </div>
          <p className="text-center text-gray-300"> © 2025 Onasi TeleCare, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
