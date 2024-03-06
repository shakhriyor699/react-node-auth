import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/response/User";
import AuthService from "../services/AuthService";


export const login = createAsyncThunk(
  '@@user/login',
  async ({ email, password }: { email: string, password: string }) => {
    const response = await AuthService.login(email, password)
    localStorage.setItem('token', response.data.accessToken)
    return response.data
  }
)

export const registration = createAsyncThunk(
  '@@user/registration',
  async ({ email, password }: { email: string, password: string }) => {
    const response = await AuthService.registration(email, password)
    localStorage.setItem('token', response.data.accessToken)
    return response.data
  }
)
export const logout = createAsyncThunk(
  '@@user/logout',
  async (): Promise<void> => {
    const response = await AuthService.logout()
    localStorage.removeItem('token')
    return response.data
  }
)




const initialState = {
  user: {} as IUser,
  isAuth: false
}




const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {
    // setUser(state, action: PayloadAction<IUser>) {
    //   state.user = action.payload
    // },
    // setIsAuth(state, action: PayloadAction<boolean>) {
    //   state.isAuth = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.isAuth = true
      })
      .addCase(login.rejected, (state) => {
        state.isAuth = false
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.isAuth = true
      })
      .addCase(registration.rejected, (state) => {
        state.isAuth = false
      })
  }
})

export const userReducer = userSlice.reducer