import { Schema, model } from 'mongoose'


const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isActivated: {
    type: Boolean,
    default: false
  },
  activationLink: {
    type: String
  }
})

module.exports = model('User', userSchema)