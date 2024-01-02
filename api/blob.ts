import { list } from '@vercel/blob'
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function blobs(
    request: VercelRequest,
    response: VercelResponse
) {
    const { blobs } = await list({})
    response.status(200).json(blobs)
}
