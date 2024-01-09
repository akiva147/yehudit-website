import { BlobImage } from '@/models/image.model'
import { axoisInstance } from './axios.service'

class ImageService {
    async getImagesByPrefix(prefix: string) {
        const { data } = await axoisInstance.get<BlobImage[]>('/blob', {
            headers: {
                prefix,
            },
        })

        const images = data.reduce((acc, item) => {
            const splitted = item.pathname.split('/')
            const imageName = splitted[splitted.length - 1]
            return { ...acc, [imageName]: item.url }
        }, {})

        return images
    }
}

export const imageService = new ImageService()
