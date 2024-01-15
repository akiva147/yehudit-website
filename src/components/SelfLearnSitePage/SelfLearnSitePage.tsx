import { LoadingImage } from '../LoadingImage'
import { Button, Image as AntdImage } from 'antd'
import classes from './self-learn-site-page.module.scss'
import { Screen } from '../Screen'
import classNames from 'classnames'

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
                    <div className={classes.gridWrapper}>
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
                    {/* the video needs to be here */}
                </section>
                <section className={classes.gridWrapper}>
                    <Screen
                        imageSrc="/selfLearnSite/Before.png"
                        isLoading={false}
                        title="Before"
                        description="Small, unreadable buttons, limited toolbar, and duplicated date."
                    />
                    <Screen
                        imageSrc="/selfLearnSite/Before.png"
                        isLoading={false}
                        title="After"
                        description="Larger, readable buttons and headers.
                        New toolbar with improved functions like comment addition,
                        text tagging, playing selected text in a video segment,
                        and change of viewing mode.
                        Consistent design across the site and on mobile."
                    />
                </section>
                <section
                    className={classes.gridWrapper}
                    style={{ display: 'flex', flexDirection: 'row' }}
                >
                    <Screen
                        imageSrc=""
                        isLoading={false}
                        title="Change layout function"
                    />
                    <Screen
                        imageSrc=""
                        isLoading={false}
                        title="Buttons descriptions"
                    />
                </section>
                <section className={classes.addtionalDetails}>
                    <h3>Additional pages for layout control</h3>
                    <section className={classes.gridWrapper}>
                        <Screen
                            imageSrc="/selfLearnSite/Before.png"
                            isLoading={false}
                            title="Change layout: Read and watch mode"
                        />
                        <Screen
                            imageSrc="/selfLearnSite/Before.png"
                            isLoading={false}
                            title="Change layout: Reading mode"
                        />
                    </section>
                </section>
                <section>
                    <header>
                        <h1>Mobile Design - Daily lessons page</h1>
                        <h4>Transcript tab design</h4>
                    </header>
                    <section
                        className={classNames([
                            classes.gridWrapper,
                            classes.mobileScreens,
                        ])}
                    >
                        <Screen
                            imageSrc=""
                            isLoading={false}
                            title="Before"
                            description="Duplicated date, small buttons, unreadable text,
                            and impractical toolbar.
                            "
                            descriptionPlacement="reversed"
                        />
                        <Screen
                            imageSrc=""
                            isLoading={false}
                            title="Before"
                            description="Duplicated date, small buttons, unreadable text,
                            and impractical toolbar.
                            "
                            descriptionPlacement="reversed"
                        />
                    </section>
                </section>
                <section>
                    <header>
                        <h1>Program Viewing Page</h1>
                        <h4>Playlist tab design</h4>
                    </header>
                    <section
                        className={classNames([
                            classes.gridWrapper,
                            classes.mobileScreens,
                        ])}
                    >
                        <Screen
                            imageSrc=""
                            isLoading={false}
                            title="Before"
                            description="Double header, small buttons, 
                            very small or very big text sizes, impractical toolbar, 
                            and sometimes inaccurate button content."
                            descriptionPlacement="reversed"
                        />
                        <Screen
                            imageSrc=""
                            isLoading={false}
                            title="Before"
                            description="Removed the title above the player, 
                            eliminated tagging function for mobile, new toolbar for accompanying texts, and improved button content formulation."
                            descriptionPlacement="reversed"
                        />
                    </section>
                </section>
                <section className={classes.addtionalDetails}>
                    <h3>Additional Designed tabs</h3>
                    <section className={classes.additionalScreens}>
                        <Screen
                            imageSrc=""
                            isLoading={false}
                            title="Summary page"
                        />
                        <Screen
                            imageSrc=""
                            isLoading={false}
                            title="Selected sections page"
                        />
                        <Screen
                            imageSrc=""
                            isLoading={false}
                            title="Files for download page"
                        />
                        <Screen
                            imageSrc=""
                            isLoading={false}
                            title="Top toolbar (while scrolling up)"
                        />
                    </section>
                </section>
                <section>
                    <h1 style={{ margin: 0 }}>Typography & Colors</h1>
                    <h2>Nunito</h2>
                    <div className={classes.colorSizes}>
                        <strong>Bold</strong>
                        <img
                            src="/Ellipse.svg"
                            alt="Ellipse"
                            style={{ height: '.8rem', width: '2rem' }}
                        />
                        <p>Medium</p>
                        <img
                            src="/Ellipse.svg"
                            alt="Ellipse"
                            style={{ height: '.8rem', width: '2rem' }}
                        />
                        <p className={classes.light}>Light</p>
                    </div>
                    <LoadingImage isLoading={false} src={''} alt="colors 1" />
                    <LoadingImage isLoading={false} src={''} alt="colors 2" />
                    <LoadingImage isLoading={false} src={''} alt="colors 3" />
                </section>
            </AntdImage.PreviewGroup>
        </div>
    )
}
