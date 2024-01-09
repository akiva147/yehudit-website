import { useNavigate } from 'react-router-dom'
import { useScreenSize } from '../../hooks/useSize'
import classes from './home-page.module.scss'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectCardsArr } from './HomePage.const'
import { Button } from 'antd'
import { UpOutlined } from '@ant-design/icons'

export interface HomePageProps {}

export const HomePage = (props: HomePageProps) => {
    return (
        <div className={classes.container}>
            <header>
                <h1>
                    Hi, I'm Yehudit <br /> UX UI Designer & Business Analyst
                </h1>
            </header>
            <main>
                {ProjectCardsArr.map(
                    ({
                        goTo,
                        imageAlt,
                        imageSrc,
                        projectScreenType,
                        titles,
                    }) => (
                        <ProjectCard
                            goTo={goTo}
                            imageAlt={imageAlt}
                            imageSrc={imageSrc}
                            projectScreenType={projectScreenType}
                            titles={titles}
                        />
                    )
                )}
            </main>
        </div>
    )
}
