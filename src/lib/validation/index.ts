import * as z from "zod"

export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'the name you have entered is too short'}),
  username: z.string().min(2, { message: 'the username you have entered is too short'}),
  email: z.string().email(),
  password: z.string().min(8, {message: 'password must be at least 8 characters'}),
})

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'ups. password is not correct'}),
})

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
})