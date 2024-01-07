import { LoadingOutlined } from '@ant-design/icons'
import classes from './loading-image.module.scss'
import { Image } from 'antd'

export interface LoadingImageProps {
    isLoading: boolean
    src: string
    alt: string
}

export const antdLoad = (
    <LoadingOutlined style={{ fontSize: 30, margin: '2rem' }} />
)

export const LoadingImage = ({ alt, isLoading, src }: LoadingImageProps) => {
    return <>{isLoading ? antdLoad : <Image src={src} alt={alt} />}</>
}
