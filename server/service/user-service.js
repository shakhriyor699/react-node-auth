
import UserModel from '../models/user-model.js'
import bcrypt from 'bcrypt'
import uuid from 'uuid'
import mailService from './mail.service.js'

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email })
    if (candidate) {
      throw new Error('User already exist')
    }
    const hashPassword = await bcrypt.hash(password, 3)
    const activationLink = uuid.v4() // выдает некоторую строку
    const user = await UserModel.create({ email, password: hashPassword, activationLink })

    return user
  }
}

export default new UserService()