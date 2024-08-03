import CORS from 'cors'

const ACCEPTED_ORIGINS =[]

export const cors = () => 
  CORS({
    origin: (origin, callback) => 
      (ACCEPTED_ORIGINS.includes(origin) || !origin)
        ? callback(null, true)
        : callback(new Error('Not allowed by CORS'))
  })
