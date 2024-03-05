import { AxiosResponse } from "axios";
import api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<AuthResponse>> {
    return api.get<AuthResponse>('/users')
  }
}