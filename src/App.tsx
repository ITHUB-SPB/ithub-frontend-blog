import { useState } from "react"

import HomePage from "./pages/home"
import WorksPage from "./pages/works"

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <nav>
        <ul>
          <li>
            <span onClick={() => setPage('home')}>Home</span>
          </li>
          <li>
            <span onClick={() => setPage('works')}>Works</span>
          </li>
        </ul>
      </nav>

      {page === "home" ? <HomePage /> : <WorksPage />}
    </>
  )
}
