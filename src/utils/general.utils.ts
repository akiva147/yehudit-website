import { EnvironmentVariables } from '@/types/env.types'
import z from 'zod'

export const envSchema = z.object({
    VITE_API_LOCATION: z.string(),
})

export const validateEnvs = (): EnvironmentVariables => {
    const env = envSchema.parse(import.meta.env)

    return {
        VITE_API_LOCATION: env.VITE_API_LOCATION,
    }
}
