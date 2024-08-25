import { z } from "zod"

export const ProfileUpdateSchema = z.object({
    name: z.string().min(8).max(50),
    email: z.string().min(8).max(50).email(),
    title:z.string().min(8).max(100),
    city:z.string().min(4).max(20),
    bio:z.string().min(50).max(100),
    skills:z.array(
        z.string().min(5).max(15),
    ),

})