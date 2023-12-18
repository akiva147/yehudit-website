import classes from './home-page.module.scss'

export interface HomePageProps {}

export const HomePage = (props: HomePageProps) => {
    return (
        <div className={classes.container}>
            <header>
                <h1>I'm a digital product designer from Petah Tikwa</h1>
            </header>
        </div>
    )
}
