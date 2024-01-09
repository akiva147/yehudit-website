import { useNavigate } from 'react-router-dom'
import classes from './project-card.module.scss'
import { useScreenSize } from '@/hooks/useSize'
import { ProjectCard as ProjectCardType } from '@/types/homePage.type'

export interface ProjectCardProps extends ProjectCardType {}

export const ProjectCard = ({
    goTo,
    imageAlt,
    imageSrc,
    projectScreenType,
    titles,
}: ProjectCardProps) => {
    const navigate = useNavigate()
    const { width } = useScreenSize()

    return (
        <div className={classes.project} onClick={() => navigate(goTo)}>
            {width >= 1600 && (
                <div className={classes.displayCard}>
                    <main>{titles}</main>
                    <footer>{projectScreenType}</footer>
                </div>
            )}
            <img src={imageSrc} alt={imageAlt} />
        </div>
    )
}
