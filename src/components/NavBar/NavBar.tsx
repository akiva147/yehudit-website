import { MenuOutlined } from '@ant-design/icons'
import classes from './nav-bar.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button, Drawer } from 'antd'
import { useScreenSize } from '@/hooks/useSize'
import { useState } from 'react'
import { ExternalWebsiteLinks, NavBarTitles } from './NavBar.utils'

export interface NavBarProps {}

export const NavBar = (props: NavBarProps) => {
    const navigate = useNavigate()
    const { width } = useScreenSize()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <div className={classes.container}>
            <h2 onClick={() => navigate('/')}>Yehudit Levi</h2>
            {width >= 760 ? (
                <div className={classes.pages}>
                    <NavBarTitles
                        navigate={navigate}
                        setIsDrawerOpen={setIsDrawerOpen}
                    />
                    <ExternalWebsiteLinks />
                </div>
            ) : (
                <>
                    <Button
                        icon={<MenuOutlined />}
                        onClick={() => setIsDrawerOpen(true)}
                    />
                    <Drawer
                        open={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}
                        closeIcon={false}
                        footer={<ExternalWebsiteLinks />}
                    >
                        <NavBarTitles
                            navigate={navigate}
                            setIsDrawerOpen={setIsDrawerOpen}
                        />
                    </Drawer>
                </>
            )}
        </div>
    )
}
