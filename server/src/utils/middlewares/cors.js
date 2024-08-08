import CORS from 'cors'
import { ALLOWED_IPS } from '#config/settings.js'

const ACCEPTED_ORIGINS = ALLOWED_IPS

export const cors = () => 
  CORS({
    origin: (origin, callback) => 
      (ACCEPTED_ORIGINS.includes(origin) || !origin)
        ? callback(null, true)
        : callback(new Error('Not allowed by CORS'))
  })
