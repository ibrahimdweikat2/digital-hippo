import {z} from 'zod'

export const AuthCredentialValidator=z.object({
    email:z.string().email(),
    password:z.string().min(8,{message:"password must be at least 8 characters"}),
    firstName:z.string(),
    lastName:z.string()
})

export type TAuthCredentialValidator=z.infer<typeof AuthCredentialValidator>