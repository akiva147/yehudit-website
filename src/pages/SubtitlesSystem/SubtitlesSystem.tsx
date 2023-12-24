import classes from './subtitles-system.module.scss'

export interface SubtitlesSystemProps {}

export const SubtitlesSystem = (props: SubtitlesSystemProps) => {
    return (
        <div className={classes.container}>
            <header>
                <h1> Subtitles system</h1>
                <h4>Global Kabbalah Academy</h4>
                <p>
                    Global Kabbalah UX UI Design & Business analysis • Desktop
                    project
                </p>
            </header>
            <img src="SubtitleSystemDesign.png" alt="Subtitle System Design" />
            <section>
                <h1>About the System</h1>
                <strong>Subtitle System of Global Kabbalah Academy</strong>
                <p>
                    A desktop application used during live broadcasts by
                    Subtitlers, the system's primary function is to upload text
                    slides containing study materials and discussion questions.
                </p>
                <strong>Live Broadcast Features</strong>
                <p>
                    The Subtitler's focus is crucial for selecting relevant
                    text. Coordination with the broadcaster includes managing
                    subtitles and seamlessly transitioning to "Questions" mode.
                </p>
                <strong>Workshop Questions Handling</strong>
                <p>
                    During workshop queries, the Subtitler switches from
                    "Subtitles" to "Questions," confirming questions in four
                    languages. An additional button facilitates the upload of
                    slides for viewing on the learning site, and the system also
                    acts as a content repository with high storage capacity.
                </p>
            </section>
            <img src="SubtitleRoom.png" alt="Subtitle Room" />
            <section>
                <h1>User Research</h1>
                <div className={classes.lists}>
                    <div className={classes.list}>
                        <strong>
                            Challenges Identified Through User Research
                        </strong>
                        <ul>
                            <li>
                                Prolonged Use Discomfort: Strong red color of
                                selected slide
                            </li>
                            <li>
                                Limited Search Capabilities: Finding specific
                                study material time-consuming
                            </li>
                            <li>
                                "Questions" Mode Issues: Manual confirmation of
                                translation updates and Unclear distinction
                                between "delete" and "next question"
                            </li>
                            <li>
                                Navigation Problems: Small, inconveniently
                                placed buttons causing confusion
                            </li>
                            <li>
                                Remote Monitoring Difficulties: Unable to
                                confirm successful broadcast remotely
                            </li>
                        </ul>
                    </div>
                    <span className={classes.verticalLine}></span>
                    <div className={classes.list}>
                        <strong>User KPIs</strong>
                        <ul>
                            <li>
                                Intuitive System to reduce cognitive load and
                                enhance overall user experience
                            </li>
                            <li>Optimized Color Schemes for Prolonged Use</li>
                            <li>Enhanced System Navigation</li>
                            <li>Efficient Search Functionality</li>
                            <li>Enable Remote Monitoring of Live Broadcasts</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <h1>Existing Screen Issues</h1>
                <ol>
                    <li>Discomfort from strong red color of selected slides</li>
                    <li>Small, inconveniently placed navigation buttons</li>
                    <li>Limited search capabilities</li>
                    <li>
                        Separate buttons complicating translation confirmation
                    </li>
                    <li>
                        Unnecessary display of question history during live
                        shifts
                    </li>
                    <li>Ineffective slide numbering placement</li>
                    <li>Lack of study material title during scrolling</li>
                </ol>
            </section>
            <img src="OldSubtitleSystem.png" alt="Old Subtitle System" />
            <section>
                <h1>Solutions & Designs</h1>
            </section>
        </div>
    )
}
