import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-healthcare-footer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-healthcare-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Cloud Health Care</h3>
                <p className="text-sm text-gray-300">is making your life easy!</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Making healthcare accessible in your native language with modern telemedicine solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/telemedicine" className="text-gray-300 hover:text-white transition-colors">
                  Telemedicine
                </Link>
              </li>
              <li>
                <Link href="/services/consultations" className="text-gray-300 hover:text-white transition-colors">
                  Consultations
                </Link>
              </li>
              <li>
                <Link href="/services/prescriptions" className="text-gray-300 hover:text-white transition-colors">
                  Prescriptions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 Cloud Health Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
