import { Image } from 'antd'
import classes from './solution-n-design.module.scss'
import { SolutionNDesign as SolutionNDesignType } from '../../types/subtitlesSystem.type'
import classNames from 'classnames'

export interface SolutionNDesignProps extends SolutionNDesignType {}

export const SolutionNDesign = ({
    imageSrc,
    title,
    list,
    order,
}: SolutionNDesignProps) => {
    return (
        <section
            className={classNames(
                classes.container,
                order === 'reversed' && classes.reverse
            )}
        >
            <Image src={imageSrc} alt={imageSrc} />
            <main>
                <h4>{title}</h4>
                {list}
            </main>
        </section>
    )
}
