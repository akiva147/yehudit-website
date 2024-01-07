import { z } from 'zod'

export const BlobImageSchema = z.object({
    size: z.number(),
    uploadedAt: z.date(),
    pathname: z.string(),
    url: z.string().url(),
})

export type BlobImage = z.infer<typeof BlobImageSchema>
