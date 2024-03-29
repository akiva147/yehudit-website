import { LinkedinOutlined } from '@ant-design/icons'
import { NavigateFunction } from 'react-router-dom'

export const NavBarTitles = ({
    navigate,
    setIsDrawerOpen,
}: {
    navigate: NavigateFunction
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => (
    <>
        <h2
            onClick={() => {
                setIsDrawerOpen(false)
                navigate('/')
            }}
        >
            WORK
        </h2>
        <h2
            onClick={() => {
                setIsDrawerOpen(false)
                navigate('/about')
            }}
        >
            ABOUT
        </h2>
        <a href={'/Yehudit Levi-Resume.pdf'} target="_blank" rel="noreferrer">
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
            <LinkedinOutlined style={{ fontSize: '23px' }} />
        </a>
        <a href="https://www.behance.net/yehuditlevi1/projects" target="_blank">
            <img src="/Behance-logo.svg" />
        </a>
    </>
)
