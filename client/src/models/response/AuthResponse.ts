export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: {
    email: string
    id: number
    isActivated: boolean
  }
}