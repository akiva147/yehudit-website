import { LoadingImage } from '../LoadingImage'
import { Button, Image as AntdImage } from 'antd'
import classes from './self-learn-site-page.module.scss'

export interface SelfLearnSitePageProps {}

export const SelfLearnSitePage = (props: SelfLearnSitePageProps) => {
    return (
        <div className={classes.container}>
            <AntdImage.PreviewGroup>
                <header>
                    <div className={classes.titles}>
                        <h1>Self learning Site</h1>
                        <h4>Global Kabbalah Academy</h4>
                        <p>
                            UX UI Design & Business analysis • Desktop & Mobile
                            project • Figma
                        </p>
                    </div>
                    <AntdImage
                        src={'/SelfLearningSiteProject.png'}
                        alt="Self Learning Site Project"
                    />
                </header>
                <section>
                    <h1>The Mission</h1>
                    <p>
                        I Conducted UX research among college students to
                        understand their habits and usage of study materials
                        during class.
                        <br />
                        Aiming to redesign the player and toolbar for an optimal
                        learning experience, the goal is to maximize enjoyment
                        and effectiveness by incorporating new features for
                        texts accompanying the lesson: transcripts, articles,
                        and study materials.
                    </p>
                </section>
                <section>
                    <h1>Goals</h1>
                    <div className={classes.listWrapper}>
                        <section className={classes.list}>
                            <strong>Business KPIs</strong>
                            <ul>
                                <li>
                                    Create an engaging learning environment to
                                    increase site usage for summaries and study
                                    material storage, replacing other programs.
                                </li>
                                <li>
                                    Encourage student involvement with open
                                    tagging, saving, sharing, and direct links
                                    to marked text in the transcript.
                                </li>
                            </ul>
                        </section>
                        <section className={classes.list}>
                            <strong>User KPIs</strong>
                            <ul>
                                <li>
                                    Ability to write summaries related to
                                    specific texts in articles.
                                </li>
                                <li>
                                    Customizable text adjustments (font size,
                                    language, dark mode).
                                </li>
                                <li>Full-screen reading of transcripts.</li>
                                <li>
                                    Seamless sharing, saving, and user-friendly
                                    mobile app buttons.
                                </li>
                                <li>
                                    Organized, simple, and understandable design
                                    in both desktop and mobile apps.
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
                <section>
                    <h1>Desktop Design - Daily lessons page</h1>
                </section>
                <section>
                    <h1>Before</h1>
                    <LoadingImage
                        isLoading={false}
                        src="/selfLearnSite/Before.png"
                        alt="Before"
                    />
                </section>
            </AntdImage.PreviewGroup>
        </div>
    )
}
