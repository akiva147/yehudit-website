import { DribbbleOutlined, LinkedinOutlined } from '@ant-design/icons'
import classes from './nav-bar.module.scss'
import { useNavigate } from 'react-router-dom'

export interface NavBarProps {}

export const NavBar = (props: NavBarProps) => {
    const navigate = useNavigate()

    return (
        <div className={classes.container}>
            <h2 onClick={() => navigate('/')}>Yehudit Levi</h2>
            <div className={classes.pages}>
                <h2 onClick={() => navigate('/')}>WORK</h2>
                <h2 onClick={() => navigate('/about')}>ABOUT</h2>
                <a
                    href={'Yehudit Levi-Resume.pdf'}
                    target="_blank"
                    rel="noreferrer"
                >
                    <h2>RESUME</h2>
                </a>
                <a
                    href="https://www.linkedin.com/in/yehudit-levi-5872a71a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                >
                    <LinkedinOutlined />
                </a>
                <a
                    href="https://www.behance.net/yehuditlevi1/projects"
                    target="_blank"
                >
                    <img src="Behance-logo.svg" />
                </a>
            </div>
        </div>
    )
}
