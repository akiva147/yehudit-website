import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { ErrorPage } from './pages/ErrorPage'
import Root from './routes/Root/Root'

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
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
