import { Schema, model } from 'mongoose'

const postSchema = Schema({
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	content: {
		text: {
			type: String,
		},
		theme: {
			type: String,
		},
	},
	image: {
		url: {
			type: String,
		},
		color: {
			type: String,
		},
	},
	shares: {
		type: Number,
		default: 0,
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

export default model('Post', postSchema)
