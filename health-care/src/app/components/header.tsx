"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-healthcare-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">CH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Cloud Health Care</h1>
              <p className="text-sm text-healthcare-secondary">making your life easy!</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-healthcare-primary transition-colors">
              Home
            </Link>
            <Link href="/patients" className="text-gray-700 hover:text-healthcare-primary transition-colors">
              Patients
            </Link>
            <Link href="/providers" className="text-gray-700 hover:text-healthcare-primary transition-colors">
              Providers
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-healthcare-primary transition-colors">
              Contact Us
            </Link>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>English</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>中文</DropdownMenuItem>
                <DropdownMenuItem>العربية</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/login">
              <Button variant="ghost" className="text-healthcare-primary">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-healthcare-secondary hover:bg-healthcare-secondary/90">Join Now</Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-healthcare-primary">
                Home
              </Link>
              <Link href="/patients" className="text-gray-700 hover:text-healthcare-primary">
                Patients
              </Link>
              <Link href="/providers" className="text-gray-700 hover:text-healthcare-primary">
                Providers
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-healthcare-primary">
                Contact Us
              </Link>
              <div className="flex space-x-2 pt-4">
                <Link href="/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="bg-healthcare-secondary hover:bg-healthcare-secondary/90">
                    Join Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
