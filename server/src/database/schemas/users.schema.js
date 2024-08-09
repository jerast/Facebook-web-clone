import { Schema, model } from 'mongoose'

const userSchema = Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true
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
  profile: {
    type: String,
  },
  cover: {
    type: String,
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  online: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id.toString()
      delete ret._id
      delete ret.__v
      delete ret.createdAt
      delete ret.updatedAt
      delete ret.password
      return ret
    }
  },
  toObject: {
    transform: (doc, ret) => {
      ret.id = ret._id.toString()
      delete ret._id
      delete ret.__v
      return ret
    }
  }
})

export default model('User', userSchema)
