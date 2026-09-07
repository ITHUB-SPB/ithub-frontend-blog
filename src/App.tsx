import { useState } from "react"

import HomePage from "./pages/home"
import WorksPage from "./pages/works"
import Nav from "./ui/nav/nav"

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <Nav setPage={setPage} active={page} />
      {page === "home" ? <HomePage /> : <WorksPage />}
    </>
  )
}
