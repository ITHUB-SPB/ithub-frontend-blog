import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/$workId')({
  component: WorkPage,
})

function WorkPage() {
  const { workId } = Route.useParams()

  return <div>{workId}</div>
}
