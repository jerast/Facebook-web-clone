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
  pictures: {
    profile: {
      type: String,
      default: null,
    },
    cover: {
      type: String,
      default: null,
    },
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
      return ret
    }
  }
})

export default model('User', userSchema)
