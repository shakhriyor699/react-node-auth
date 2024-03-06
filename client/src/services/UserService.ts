import { AxiosResponse } from "axios";
import api from "../http";
import { IUser } from "../models/response/User";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return api.get<IUser[]>('/users')
  }
}