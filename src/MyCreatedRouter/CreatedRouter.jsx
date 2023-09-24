
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Favaroutes from '../Pages/Favaroutes/Favaroutes';
import Login from '../Pages/Login/Login';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Phone from '../Pages/Phone/Phone';

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/phones.json')
            },
            {
                path: '/favorites',
                element: <Favaroutes></Favaroutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/phones/:id',
                element: <Phone></Phone>,
                loader: () => fetch('/phones.json')
            }
        ]
    }
]);

export default myCreatedRouter;