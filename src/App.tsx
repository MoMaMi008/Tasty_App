import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import SearchResult from "./pages/searchResult/SearchResult";
import Details from "./pages/details/Details";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {/* <Route path="/" element={} /> */}
                <Route
                    path="/:category"
                    element={
                        <>
                            <Outlet />
                        </>
                    }
                >
                    <Route path=":mealID" element={<Details />} />
                </Route>
                <Route path="/search/:search" element={<SearchResult />} />
            </>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
