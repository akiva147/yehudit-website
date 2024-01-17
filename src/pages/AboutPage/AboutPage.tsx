import { LoadingImage } from '@/components/LoadingImage'
import classes from './about-page.module.scss'

export interface AboutPageProps {}

export const AboutPage = (props: AboutPageProps) => {
    return (
        <div className={classes.container}>
            <header>
                <h1>About Me</h1>
            </header>
            <section className={classes.aboutMe}>
                <div className={classes.text}>
                    <p>
                        I have over two years of experience building UX and UI
                        design for variety of websites. I have a high motivation
                        and glad to take up challenges and solve complicated
                        problems.
                    </p>
                    <span>
                        <a href="mailto:yehuditlevi.66@gmail.com">
                            yehuditlevi.66@gmail.com
                        </a>
                        <a href="tel:+972542572119">+972 54 257 2119</a>
                    </span>
                </div>
                <LoadingImage isLoading={false} src="" alt="" />
            </section>
        </div>
    )
}
