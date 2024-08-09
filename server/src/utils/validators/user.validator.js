import { z } from 'zod'

const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(8),
})

export default {
  full: (input) => userSchema.safeParse(input),
  partial: (input) => userSchema.partial().safeParse(input),
}