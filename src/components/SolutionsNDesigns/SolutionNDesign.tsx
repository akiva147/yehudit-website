import { Image } from 'antd'
import classes from './solution-n-design.module.scss'
import { SolutionNDesign as SolutionNDesignType } from '../../types/subtitlesSystem.type'
import classNames from 'classnames'
import { LoadingImage } from '../LoadingImage'

export interface SolutionNDesignProps extends SolutionNDesignType {
    isLoading: boolean
}

export const SolutionNDesign = ({
    imageSrc,
    title,
    list,
    order,
    isLoading,
}: SolutionNDesignProps) => {
    return (
        <section
            className={classNames(
                classes.container,
                order === 'reversed' && classes.reverse
            )}
        >
            <LoadingImage src={imageSrc} alt={imageSrc} isLoading={isLoading} />
            <main>
                <h4>{title}</h4>
                {list}
            </main>
        </section>
    )
}
