import { list } from '@vercel/blob'
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function blobs(
    request: VercelRequest,
    response: VercelResponse
) {
    const prefix = request.headers['prefix']

    if (!prefix)
        return response.status(400).json('Did not Provide prefix header')

    try {
        const { blobs } = await list({
            prefix: prefix as string,
        })
        return response.status(200).json(blobs)
    } catch (error) {
        console.log('🚀 ~ file: blob.ts:21 ~ error:', error)
        return response.status(500).json('could not fetch blob files')
    }
}
