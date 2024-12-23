import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={} />
                <Route path="/:category" element={}>
                    <Route path="/:category/:meal" element={} />
                </Route>
            </>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
