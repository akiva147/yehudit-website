import { Screen, SolutionNDesign } from '../../types/subtitlesSystem.type'

export const getSolutionsNDesignsArr = (images: object): SolutionNDesign[] => [
    {
        imageSrc: images['SubtitleLaptop_1.png'],
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
        imageSrc: images['SubtitleLaptop_2.png'],
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
        imageSrc: images['SubtitleLaptop_3.png'],
        title: 'Search in text',
        list: (
            <ul>
                <li>Efficient search functionality within the article</li>
            </ul>
        ),
        order: 'normal',
    },
    {
        imageSrc: images['SubtitleLaptop_4.png'],
        title: 'Quick Dropdown for Archive Search',
        list: (
            <ul>
                <li>Free Text Search Option</li>
            </ul>
        ),
        order: 'reversed',
    },
    {
        imageSrc: images['SubtitleLaptop_5.png'],
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
        imageSrc: images['SubtitleLaptop_6.png'],
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
        imageSrc: images['SubtitleLaptop_7.png'],
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

export const getBigScreensArr = (images: object): Screen[] => [
    {
        imageSrc: images['Main page Active Subtitles.png'],
        title: 'Main page / Active Subtitles',
    },
    {
        imageSrc: images['Quick search Main page.png'],
        title: 'Quick search / Main page',
    },
    {
        imageSrc: images['Main page Offline tab.png'],
        title: 'Main page / Offline tab',
    },
    {
        imageSrc:
            images['Main page close live broadcast  Open slides numbers.png'],
        title: 'Main page / close live broadcast /  Open slides numbers',
    },
    {
        imageSrc: images['Main page Active Subtitles_2.png'],
        title: 'Main page / Active Subtitles',
    },
    {
        imageSrc: images['Main page Quick search.png'],
        title: 'Main page / Quick search',
    },
]
export const getSmallScreensArr = (images: object): Screen[] => [
    {
        imageSrc: images['Main page Active Questions.png'],
        title: 'Main page / Active Questions',
    },
    {
        imageSrc: images['Main page Active Questions Invisible question.png'],
        title: 'Main page / Active Questions / Invisible question',
    },
    {
        imageSrc: images['Main page Active Questions Archive drop down.png'],
        title: 'Main page / Active Questions / Archive drop down',
    },
    {
        imageSrc: images['Archive page Titles Preview on Hover.png'],
        title: 'Archive page / Titles Preview on Hover',
    },
    {
        imageSrc: images['Archive page “Delete” pop up.png'],
        title: 'Archive page / “Delete” pop up',
    },
    {
        imageSrc: images['Archive page Saved successfully message.png'],
        title: 'Archive page / Saved successfully message',
    },
    {
        imageSrc: images['New subtitle page.png'],
        title: 'New subtitle page',
    },
    {
        imageSrc: images['New subtitle page Uploading file.png'],
        title: 'New subtitle page / Uploading file',
    },
    {
        imageSrc: images['New subtitle page Question.png'],
        title: 'New subtitle page / Question',
    },
]
