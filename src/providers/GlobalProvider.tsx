import { ConfigProvider } from 'antd'
import locale from 'antd/locale/he_IL'

export interface GlobalProviderProps {
    children: React.ReactElement
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    return <ConfigProvider locale={locale}>{children}</ConfigProvider>
}
