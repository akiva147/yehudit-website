import { Screen, SolutionNDesign } from '../../types/subtitlesSystem.type'

export const SolutionsNDesignsArr: SolutionNDesign[] = [
    {
        imageSrc: '/subtitlesSystem/SubtitleLaptop_1.png',
        title: 'Active Subtitles - Main page',
        list: (
            <ul>
                <li>
                    Redesign with College-Branded Colors, Gray and blue for
                    prolonged comfort
                </li>
                <li>Enlarge and Reposition Navigation Buttons</li>
                <li>
                    Implement Intuitive Slide Numbering Include search option
                </li>
                <li>
                    Add Study Material Title and Tabs - Quick topic switching
                    during lessons
                </li>
                <li>Add Remote Monitoring of Live Broadcast</li>
            </ul>
        ),
        order: 'normal',
    },
    {
        imageSrc: '/subtitlesSystem/SubtitleLaptop_2.png',
        title: 'Active Questions - Main page',
        list: (
            <ul>
                <li>Consolidate Question History</li>
                <li>"Off/On Website" Button:</li>
                <ul>
                    <li>Confirm all question translations</li>
                    <li>Upload for viewing on learning website</li>
                    <li>
                        Additional functionality: Upload clickable link to
                        learning website, not limited to workshop questions
                    </li>
                </ul>
            </ul>
        ),
        order: 'reversed',
    },
    {
        imageSrc: '/subtitlesSystem/SubtitleLaptop_3.png',
        title: 'Search in text',
        list: (
            <ul>
                <li>Efficient search functionality within the article</li>
            </ul>
        ),
        order: 'normal',
    },
    {
        imageSrc: '/subtitlesSystem/SubtitleLaptop_4.png',
        title: 'Quick Dropdown for Archive Search',
        list: (
            <ul>
                <li>Free Text Search Option</li>
            </ul>
        ),
        order: 'reversed',
    },
    {
        imageSrc: '/subtitlesSystem/SubtitleLaptop_5.png',
        title: 'Archive page - Functionality',
        list: (
            <ul>
                <li>
                    Introduce Quick Save Function - Directly from content
                    archive to tabs on main screen
                </li>
                <li>
                    Free Text Search Option - Results with similar text are
                    prioritized, and the exact match appears in bold in the
                    middle of the sentence.
                </li>
                <li>Filter by Author Option</li>
            </ul>
        ),
        order: 'normal',
    },
    {
        imageSrc: '/subtitlesSystem/SubtitleLaptop_6.png',
        title: 'Archive page',
        list: (
            <ul>
                <li>
                    Incorporate Crucial System Messages e.g., "Delete text from
                    the archive?" and "Saved successfully"
                </li>
            </ul>
        ),
        order: 'reversed',
    },
    {
        imageSrc: '/subtitlesSystem/SubtitleLaptop_7.png',
        title: 'New Subtitle page',
        list: (
            <ul>
                <li>
                    Option to Quickly Upload Files to the Archive Database:
                    Ability to upload files with precise settings for effective
                    organization, including categorization by author, language,
                    title, and book.
                </li>
                <li>
                    Independent Capability to Submit Workshop Questions: In case
                    of a malfunction, users have the independent ability to
                    write and submit questions for the workshop.
                </li>
            </ul>
        ),
        order: 'normal',
    },
]

export const bigScreensArr: Screen[] = [
    {
        imageSrc: '/subtitlesSystem/screens/big/Main page Active Subtitles.png',
        title: 'Main page / Active Subtitles',
    },
    {
        imageSrc: '/subtitlesSystem/screens/big/Quick search Main page.png',
        title: 'Quick search / Main page',
    },
    {
        imageSrc: '/subtitlesSystem/screens/big/Main page Offline tab.png',
        title: 'Main page / Offline tab',
    },
    {
        imageSrc:
            '/subtitlesSystem/screens/big/Main page close live broadcast  Open slides numbers.png',
        title: 'Main page / close live broadcast /  Open slides numbers',
    },
    {
        imageSrc:
            '/subtitlesSystem/screens/big/Main page Active Subtitles_2.png',
        title: 'Main page / Active Subtitles',
    },
    {
        imageSrc: '/subtitlesSystem/screens/big/Main page Quick search.png',
        title: 'Main page / Quick search',
    },
]
export const smallScreensArr: Screen[] = [
    {
        imageSrc:
            '/subtitlesSystem/screens/small/Main page Active Questions.png',
        title: 'Main page / Active Questions',
    },
    {
        imageSrc:
            '/subtitlesSystem/screens/small/Main page Active Questions Invisible question.png',
        title: 'Main page / Active Questions / Invisible question',
    },
    {
        imageSrc:
            '/subtitlesSystem/screens/small/Main page Active Questions Archive drop down.png',
        title: 'Main page / Active Questions / Archive drop down',
    },
    {
        imageSrc:
            '/subtitlesSystem/screens/small/Archive page Titles Preview on Hover.png',
        title: 'Archive page / Titles Preview on Hover',
    },
    {
        imageSrc:
            '/subtitlesSystem/screens/small/Archive page “Delete” pop up.png',
        title: 'Archive page / “Delete” pop up',
    },
    {
        imageSrc:
            '/subtitlesSystem/screens/small/Archive page Saved successfully message.png',
        title: 'Archive page / Saved successfully message',
    },
    {
        imageSrc: '/subtitlesSystem/screens/small/New subtitle page.png',
        title: 'New subtitle page',
    },
    {
        imageSrc:
            '/subtitlesSystem/screens/small/New subtitle page Uploading file.png',
        title: 'New subtitle page / Uploading file',
    },
    {
        imageSrc:
            '/subtitlesSystem/screens/small/New subtitle page Question.png',
        title: 'New subtitle page / Question',
    },
]
