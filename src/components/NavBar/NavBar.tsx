import { DribbbleOutlined, LinkedinOutlined } from '@ant-design/icons'
import classes from './nav-bar.module.scss'
import { useNavigation } from 'react-router-dom'

export interface NavBarProps {}

export const NavBar = (props: NavBarProps) => {
    const navigation = useNavigation()

    return (
        <div className={classes.container}>
            <h2>Yehudit Levi</h2>
            <div className={classes.pages}>
                <h2>WORK</h2>
                <h2>ABOUT</h2>
                <h2>RESUME</h2>
                <a href="https://www.linkedin.com/" target="_blank">
                    <LinkedinOutlined />
                </a>
                <a href="https://dribbble.com/" target="_blank">
                    <DribbbleOutlined />
                </a>
            </div>
        </div>
    )
}
