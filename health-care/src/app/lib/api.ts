// API service layer for .NET Core backend integration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://localhost:7001/api"

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`
    const token = localStorage.getItem("authToken")

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    }

    const response = await fetch(url, config)

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
  }

  // Auth endpoints
  async login(email: string, password: string) {
    return this.request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
  }

  async register(userData: any) {
    return this.request("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    })
  }

  // Provider endpoints
  async getProviders() {
    return this.request("/providers")
  }

  async getProvider(id: string) {
    return this.request(`/providers/${id}`)
  }

  // Appointment endpoints
  async bookAppointment(appointmentData: any) {
    return this.request("/appointments", {
      method: "POST",
      body: JSON.stringify(appointmentData),
    })
  }

  async getAppointments() {
    return this.request("/appointments")
  }

  // Contact form
  async submitContact(contactData: any) {
    return this.request("/contact", {
      method: "POST",
      body: JSON.stringify(contactData),
    })
  }
}

export const apiService = new ApiService()
