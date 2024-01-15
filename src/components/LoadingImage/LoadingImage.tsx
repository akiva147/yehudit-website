import { LoadingOutlined } from '@ant-design/icons'
import classes from './loading-image.module.scss'
import { Image, Skeleton } from 'antd'
import { imageFallback } from '@/constants/general.const'

export interface LoadingImageProps {
    isLoading: boolean
    src: string
    alt: string
}

export const LoadingImage = ({ alt, isLoading, src }: LoadingImageProps) => {
    return (
        <>
            {isLoading ? (
                <Skeleton.Image active />
            ) : (
                <Image src={src} alt={alt} fallback={imageFallback} />
            )}
        </>
    )
}
