import { validateEnvs } from '@/utils/general.utils'
import axois from 'axios'

const { VITE_API_LOCATION } = validateEnvs()

export const axoisInstance = axois.create({
    baseURL: VITE_API_LOCATION,
})
