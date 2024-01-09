import { ExternalWebsiteLinks } from '../NavBar/NavBar.utils'
import classes from './footer.module.scss'

export interface FooterProps {}

export const Footer = (props: FooterProps) => {
    return (
        <div className={classes.container}>
            <div className={classes.links}>
                <ExternalWebsiteLinks />
            </div>
            <a href="mailto:yehuditlevi.66@gmail.com">
                yehuditlevi.66@gmail.com
            </a>
            <a href="tel:+972542572119">+972 54 257 2119</a>
        </div>
    )
}
