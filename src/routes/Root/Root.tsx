import { LoadingOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Spin } from 'antd'
import { Outlet, useNavigation } from 'react-router-dom'
import { NavBar } from '../../components/NavBar'
import classes from './root.module.scss'
import { Footer } from '@/components/Footer'

export const LoadingIcon = <LoadingOutlined spin={true} size={16} />

export default function Root() {
    const navigation = useNavigation()
    return (
        <div className={classes.container}>
            {navigation.state === 'loading' && <Spin indicator={LoadingIcon} />}
            <NavBar />
            <Outlet />
            <Button
                className={classes.goUpButton}
                icon={<UpOutlined />}
                onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
            />
            <Footer />
        </div>
    )
}
