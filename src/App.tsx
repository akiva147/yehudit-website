import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { ErrorPage } from './pages/ErrorPage'
import Root from './routes/Root/Root'
import { AboutPage } from './pages/AboutPage'
import { GlobalProvider } from './providers/GlobalProvider'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
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
