import { Schema, model } from 'mongoose'

const newSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  type: {
    type: String,
    default: 'post'
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
    required: true
  }],
  reactions: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    reaction: {
      type: String,
    },
  }],
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

export default model('New', newSchema)
