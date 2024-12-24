import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import SearchResult from "./pages/searchResult/SearchResult";
import Details from "./pages/details/Details";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Home />} />
                <Route path="/:category" element={<Categories />}>
                    <Route path=":mealID" element={<Details />} />
                </Route>
                <Route path="/search/:search" element={<SearchResult />} />
                <Route path="*" element={<NotFound />} />
            </>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
