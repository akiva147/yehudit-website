import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { Outlet, useNavigation } from 'react-router-dom'
import { NavBar } from '../../components/NavBar'
import classes from './root.module.scss'

export const LoadingIcon = <LoadingOutlined spin={true} size={16} />

export default function Root() {
    const navigation = useNavigation()
    return (
        <div className={classes.container}>
            {navigation.state === 'loading' && <Spin indicator={LoadingIcon} />}
            <NavBar />
            {/* all the other elements */}
            <Outlet />
        </div>
    )
}
