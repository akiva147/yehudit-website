import { ProjectCard } from '@/types/homePage.type'

export const ProjectCardsArr: ProjectCard[] = [
    {
        goTo: '/subtitles-system',
        imageAlt: 'Subtitle System Design',
        imageSrc: '/SubtitleSystemProject.png',
        projectScreenType: 'Desktop',
        titles: (
            <>
                <h2>Subtitles System Design</h2>
                <h4>Global Kabbalah Academy</h4>
                <h3>UX UI Design</h3>
            </>
        ),
    },
    {
        goTo: '/self-learn-site',
        imageAlt: 'Self learning Site',
        imageSrc: '/SelfLearningSiteProject.png',
        projectScreenType: 'Desktop & Mobile',
        titles: (
            <>
                <h2>Self learning Site</h2>
                <h4>Global Kabbalah Academy</h4>
                <h3>UX UI Design & Business analysis</h3>
            </>
        ),
    },
    {
        goTo: '/online-market',
        imageAlt: 'Online marketplace',
        imageSrc: '/OnlineMarketplaceProject.png',
        projectScreenType: 'Desktop',
        titles: (
            <>
                <h2>Online marketplace</h2>
                <h4>W2A Books</h4>
                <h3>UX UI Design</h3>
            </>
        ),
    },
    {
        goTo: '/smart-home',
        imageAlt: 'Smart home',
        imageSrc: '/SmartHomeProject.png',
        projectScreenType: 'Mobile',
        titles: (
            <>
                <h2>Smart home</h2>
                <h4>HomeSphere</h4>
                <h3>UX UI Design</h3>
            </>
        ),
    },
]
