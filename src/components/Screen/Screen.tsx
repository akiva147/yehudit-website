import { Image } from 'antd'
import classes from './screen.module.scss'
import { Screen as ScreenType } from '../../types/subtitlesSystem.type'

export interface ScreenProps extends ScreenType {}

export const Screen = ({ imageSrc, title }: ScreenProps) => {
    return (
        <section>
            <h5>{title}</h5>
            <Image src={imageSrc} alt={imageSrc} />
        </section>
    )
}
