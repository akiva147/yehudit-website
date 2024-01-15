import { Image } from 'antd'
import classes from './screen.module.scss'
import { Screen as ScreenType } from '../../types/subtitlesSystem.type'
import { LoadingImage } from '../LoadingImage'
import classNames from 'classnames'

export interface ScreenProps extends ScreenType {
    isLoading: boolean
    description?: string
    descriptionPlacement?: 'reversed' | 'normal'
}

export const Screen = ({
    imageSrc,
    title,
    isLoading,
    description,
    descriptionPlacement,
}: ScreenProps) => {
    return (
        <section className={classes.container}>
            <h4>{title}</h4>
            <div
                className={classNames([
                    descriptionPlacement === 'reversed' && classes.reversed,
                ])}
            >
                <LoadingImage
                    src={imageSrc}
                    alt={imageSrc}
                    isLoading={isLoading}
                />
                {description && <p>{description}</p>}
            </div>
        </section>
    )
}
