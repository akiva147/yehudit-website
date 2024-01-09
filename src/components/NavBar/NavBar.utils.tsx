import { LinkedinOutlined } from '@ant-design/icons'
import { NavigateFunction } from 'react-router-dom'

export const NavBarTitles = ({ navigate }: { navigate: NavigateFunction }) => (
    <>
        <h2 onClick={() => navigate('/')}>WORK</h2>
        <h2 onClick={() => navigate('/about')}>ABOUT</h2>
        <a
            href={'/general/Yehudit Levi-Resume.pdf'}
            target="_blank"
            rel="noreferrer"
        >
            <h2>RESUME</h2>
        </a>
    </>
)
export const ExternalWebsiteLinks = () => (
    <>
        <a
            href="https://www.linkedin.com/in/yehudit-levi-5872a71a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
        >
            <LinkedinOutlined />
        </a>
        <a href="https://www.behance.net/yehuditlevi1/projects" target="_blank">
            <img src="/general/Behance-logo.svg" />
        </a>
    </>
)
