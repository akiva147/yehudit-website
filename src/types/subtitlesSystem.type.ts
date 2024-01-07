import { BlobImage } from '@/models/image.model'

export type SolutionNDesign = {
    imageSrc: string
    title: string
    list: JSX.Element
    order: 'normal' | 'reversed'
}

export type Image = Record<
    keyof Pick<BlobImage, 'pathname'>,
    Pick<BlobImage, 'url'>
>

export type Screen = Pick<SolutionNDesign, 'imageSrc' | 'title'>
