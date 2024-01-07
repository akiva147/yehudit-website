import { Image } from 'antd'
import classes from './screen.module.scss'
import { Screen as ScreenType } from '../../types/subtitlesSystem.type'
import { LoadingImage } from '../LoadingImage'

export interface ScreenProps extends ScreenType {
    isLoading: boolean
}

export const Screen = ({ imageSrc, title, isLoading }: ScreenProps) => {
    return (
        <section>
            <h5>{title}</h5>
            <LoadingImage src={imageSrc} alt={imageSrc} isLoading={isLoading} />
        </section>
    )
}
