export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  dateOfBirth?: string
  phoneNumber?: string
  role: "patient" | "provider" | "admin"
}

export interface Provider {
  id: string
  firstName: string
  lastName: string
  specialty: string
  languages: string[]
  rating: number
  experience: number
  imageUrl?: string
}

export interface Appointment {
  id: string
  patientId: string
  providerId: string
  dateTime: string
  type: "consultation" | "follow-up" | "emergency"
  status: "scheduled" | "completed" | "cancelled"
  notes?: string
}

export interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone?: string
  inquiryType: string
  message: string
}

export interface AuthForm {
  email: string
  password: string
  firstName?: string
  lastName?: string
  dateOfBirth?: string
}
