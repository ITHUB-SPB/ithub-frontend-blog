import { useState } from "react";

import HomePage from "./pages/home";
import WorksPage from "./pages/works";
import ExamplePage from "./pages/example";
import Nav from "./ui/nav/nav";
import Footer from "./ui/footer/footer";

type Page = "home" | "works" | "example";

export default function App() {
    const [page, setPage] = useState<Page>("example");

    const pages = {
        home: <HomePage />,
        works: <WorksPage />,
        example: <ExamplePage />,
    };

    return (
        <>
            <Nav setPage={setPage} active={page} />
            {pages[page]}
            <Footer />
        </>
    );
}
