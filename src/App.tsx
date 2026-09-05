import { useState } from "react"

import HomePage from "./pages/home"
import WorksPage from "./pages/works"

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <button onClick={
        () => setPage(page => page === 'home' ? 'works' : 'home')
      }>Change Page</button>

      {page === "home" ? <HomePage /> : <WorksPage />}
    </>
  )
}
