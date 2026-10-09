import { Outlet, createRootRoute } from "@tanstack/react-router";
import Nav from "../ui/nav/nav";

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFound
})

function NotFound() {
    return <p>Страница не найдена</p>
}

function RootComponent() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}