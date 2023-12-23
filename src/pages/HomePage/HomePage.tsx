import { useSize } from '../../hooks/useSize'
import classes from './home-page.module.scss'

export interface HomePageProps {}

export const HomePage = (props: HomePageProps) => {
    const { width } = useSize()

    return (
        <div className={classes.container}>
            <header>
                <h1>
                    Hi, I'm Yehudit <br /> UX UI Designer & Business Analyst
                </h1>
            </header>
            <main>
                <div className={classes.project}>
                    {width >= 1600 && (
                        <div className={classes.displayCard}>
                            <h2>Subtitles System Design</h2>
                            <h4>Global Kabbalah Academy</h4>
                            <h3>UX UI Design</h3>
                        </div>
                    )}
                    <img src="SubtitleSystemDesign.png" />
                </div>
            </main>
        </div>
    )
}
