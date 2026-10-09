import { createFileRoute } from '@tanstack/react-router'
import { posts } from '../data'

export const Route = createFileRoute('/post/$postId')({
  component: PostPage,
})

function PostPage() {
  const { postId } = Route.useParams()

  const post = posts.find(({ id }) => id == postId)

  return <div>{JSON.stringify(post)}</div>
}
