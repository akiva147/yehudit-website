import { Button, Image as AntdImage } from 'antd'
import { useScreenSize } from '../../hooks/useSize'
import {
    getBigScreensArr,
    getSmallScreensArr,
    getSolutionsNDesignsArr,
} from './subtitlesSystemPage.conts'
import { SolutionNDesign } from '../../components/SolutionsNDesigns'
import { Screen } from '../../components/Screen'
import { UpOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import classes from './subtitles-system-page.module.scss'
import { LoadingImage } from '@/components/LoadingImage'
import { imageService } from '@/services/image.service'
import { useMemo } from 'react'
import { Image } from '@/types/subtitlesSystem.type'

export interface SubtitlesSystemProps {}

export const SubtitlesSystemPage = (props: SubtitlesSystemProps) => {
    const { data, isLoading } = useQuery({
        queryKey: ['subtitlesSystem'],
        queryFn: async () =>
            await imageService.getImagesByPrefix(
                '/yehudit-webtite/subtitlesSystem/'
            ),
    })

    const images = useMemo(() => (data ? data : []), [data])

    const { width } = useScreenSize()

    return (
        <div className={classes.container}>
            <AntdImage.PreviewGroup>
                <header>
                    <div className={classes.titles}>
                        <h1>Subtitles system</h1>
                        <h4>Global Kabbalah Academy</h4>
                        <p>
                            Global Kabbalah UX UI Design & Business analysis •
                            Desktop project
                        </p>
                    </div>
                    <AntdImage
                        src={'/SubtitleSystemProject.png'}
                        alt="Subtitle System Design"
                    />
                </header>
                <section>
                    <h1>About the System</h1>
                    <strong>Subtitle System of Global Kabbalah Academy</strong>
                    <p>
                        A desktop application used during live broadcasts by
                        Subtitlers, the system's primary function is to upload
                        text slides containing study materials and discussion
                        questions.
                    </p>
                    <strong>Live Broadcast Features</strong>
                    <p>
                        The Subtitler's focus is crucial for selecting relevant
                        text. Coordination with the broadcaster includes
                        managing subtitles and seamlessly transitioning to
                        "Questions" mode.
                    </p>
                    <strong>Workshop Questions Handling</strong>
                    <p>
                        During workshop queries, the Subtitler switches from
                        "Subtitles" to "Questions," confirming questions in four
                        languages. An additional button facilitates the upload
                        of slides for viewing on the learning site, and the
                        system also acts as a content repository with high
                        storage capacity.
                    </p>
                </section>
                <LoadingImage
                    isLoading={!data}
                    src={images['SubtitleRoom.png']}
                    alt="Subtitle Room"
                />
                <section>
                    <h1>User Research</h1>
                    <div className={classes.listWrapper}>
                        <section className={classes.list}>
                            <strong>
                                Challenges Identified Through User Research
                            </strong>
                            <ul>
                                <li>
                                    Prolonged Use Discomfort: Strong red color
                                    of selected slide
                                </li>
                                <li>
                                    Limited Search Capabilities: Finding
                                    specific study material time-consuming
                                </li>
                                <li>
                                    "Questions" Mode Issues: Manual confirmation
                                    of translation updates and Unclear
                                    distinction between "delete" and "next
                                    question"
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
                        </section>
                        <section className={classes.list}>
                            <strong>User KPIs</strong>
                            <ul>
                                <li>
                                    Intuitive System to reduce cognitive load
                                    and enhance overall user experience
                                </li>
                                <li>
                                    Optimized Color Schemes for Prolonged Use
                                </li>
                                <li>Enhanced System Navigation</li>
                                <li>Efficient Search Functionality</li>
                                <li>
                                    Enable Remote Monitoring of Live Broadcasts
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
                <section>
                    <h1>Existing Screen Issues</h1>
                    <ol>
                        <li>
                            Discomfort from strong red color of selected slides
                        </li>
                        <li>Small, inconveniently placed navigation buttons</li>
                        <li>Limited search capabilities</li>
                        <li>
                            Separate buttons complicating translation
                            confirmation
                        </li>
                        <li>
                            Unnecessary display of question history during live
                            shifts
                        </li>
                        <li>Ineffective slide numbering placement</li>
                        <li>Lack of study material title during scrolling</li>
                    </ol>
                </section>
                <LoadingImage
                    isLoading={!data}
                    src={images['OldSubtitleSystem.png']}
                    alt="Old Subtitle System"
                />

                <section>
                    <h1>Solutions & Designs</h1>
                    {getSolutionsNDesignsArr(images).map(
                        ({ imageSrc, title, list, order }) => (
                            <SolutionNDesign
                                isLoading={!data}
                                imageSrc={imageSrc}
                                title={title}
                                list={list}
                                order={order}
                                key={crypto.randomUUID()}
                            />
                        )
                    )}
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
                    <LoadingImage
                        isLoading={!data}
                        src={images['Colors_1.png']}
                        alt="colors 1"
                    />
                    <LoadingImage
                        isLoading={!data}
                        src={images['Colors_2.png']}
                        alt="colors 2"
                    />
                </section>
                <section>
                    <h1>Screens</h1>
                    <section className={classes.bigScreens}>
                        {getBigScreensArr(images).map(({ imageSrc, title }) => (
                            <Screen
                                isLoading={!data}
                                imageSrc={imageSrc}
                                title={title}
                                key={crypto.randomUUID()}
                            />
                        ))}
                    </section>
                    <section className={classes.smallScreens}>
                        {getSmallScreensArr(images).map(
                            ({ imageSrc, title }) => (
                                <Screen
                                    isLoading={!data}
                                    imageSrc={imageSrc}
                                    title={title}
                                    key={crypto.randomUUID()}
                                />
                            )
                        )}
                    </section>
                </section>
                <div className={classes.Screens}></div>
            </AntdImage.PreviewGroup>
        </div>
    )
}
