import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFound
})

function NotFound() {
    return <p>Страница не найдена</p>
}

function RootComponent() {
    return (
        <div>
            <Outlet />
        </div>
    )
}