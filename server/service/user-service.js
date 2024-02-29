
import UserModel from '../models/user-model.js'
import bcrypt from 'bcrypt'
import uuid from 'uuid'
import mailService from './mail.service.js'
import tokenService from './token-service.js'
import userDto from '../dtos/user-dto.js'

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email })
    if (candidate) {
      throw new Error('User already exist')
    }
    const hashPassword = await bcrypt.hash(password, 3)
    const activationLink = uuid.v4() // выдает некоторую строку
    const user = await UserModel.create({ email, password: hashPassword, activationLink })
    await mailService.sendActivationMail(email, activationLink)
    const tokens = tokenService.generatetokens({ _id: user._id })
    const userDto = new userDto(user)
    // return user
  }
}

export default new UserService()