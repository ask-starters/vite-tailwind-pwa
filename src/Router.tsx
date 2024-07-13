import { createBrowserRouter } from "react-router-dom";

import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";


const AppRouter: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <NotFound />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default AppRouter;