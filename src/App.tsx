import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { ErrorPage } from './pages/ErrorPage'
import Root from './routes/Root/Root'
import { AboutPage } from './pages/AboutPage'
import { GlobalProvider } from './providers/GlobalProvider'
import { SubtitlesSystemPage } from './pages/SubtitlesSystemPage'
import { SelfLearnSitePage } from './pages/SelfLearnSitePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/subtitles-system',
                element: <SubtitlesSystemPage />,
            },
            {
                path: '/self-learn-site',
                element: <SelfLearnSitePage />,
            },
            {
                path: '*',
                element: <Navigate to={'/'} replace />,
            },
        ],
    },
])

function App() {
    return (
        <GlobalProvider>
            <RouterProvider router={router} />
        </GlobalProvider>
    )
}

export default App
