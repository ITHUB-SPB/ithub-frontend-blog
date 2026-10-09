import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/works')({
  component: WorksPage,
})

function WorksPage() {
  return (
    <>
      <h2>Works</h2>
    </>
  )
}
