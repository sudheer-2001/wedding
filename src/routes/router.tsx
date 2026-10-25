import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../MainLayout";
import SplashScreen from "../pages/Screens/SplashScreen";
import Rsvp from "../components/Rsvp";
import WeddingLayout from "../pages/WeddingLayout";


const Router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <h3>Please use your invitation link</h3> },
            {
                path:"/:slug",
                element: <WeddingLayout />,
                children: [
                    { index: true, element: <SplashScreen /> },
                    { path: "rsvp", element: <Rsvp /> }
                ]
            }
            // { path: "/", element: <SplashScreen /> },
            // { path: "/rsvp", element: <Rsvp /> },
        ]
    },
    {        path: "*", element: <h3>Not Found</h3>
    }
],
{  basename: "/wedding"} // "/wedding/" on GitHub Pages

);

export default function AppRouter() {
    return <RouterProvider router={Router} />
};