import { useState } from "react";

import HomePage from "./pages/home";
import WorksPage from "./pages/works";
import Nav from "./ui/nav/nav";
import Footer from "./ui/footer/footer";

type Page = "home" | "works";

export default function App() {
    const [page, setPage] = useState<Page>("home");

    const pages = {
        home: <HomePage />,
        works: <WorksPage />,
    };

    return (
        <>
            <Nav setPage={setPage} active={page} />
            {pages[page]}
            <Footer />
        </>
    );
}
