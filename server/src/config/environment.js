import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.FACEBOOK_WEB_CLONE_PORT || 1234
export const DB_URI = process.env.FACEBOOK_WEB_CLONE_DB_URI || "mongodb://url_database"
export const JWT_SEED = process.env.FACEBOOK_WEB_CLONE_JWT_SEED || "seed"
export const CLOUDINARY_CLOUD = process.env.FACEBOOK_WEB_CLONE_CLOUDINARY_CLOUD || "abc"
export const CLOUDINARY_KEY = process.env.FACEBOOK_WEB_CLONE_CLOUDINARY_KEY || 12345678
export const CLOUDINARY_SECRET = process.env.FACEBOOK_WEB_CLONE_CLOUDINARY_SECRET || "cloud_secret"