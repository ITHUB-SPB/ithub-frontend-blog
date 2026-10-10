import { createFileRoute } from '@tanstack/react-router'
import { posts } from '../data'

export const Route = createFileRoute('/post/$postId')({
  component: PostPage,
})

function PostPage() {
  const { postId } = Route.useParams()
  const navigate = Route.useNavigate()

  const post = posts.find(({ id }) => id == postId)

  if (!post) {
    // return <p>Пост не найден</p>
    navigate({ to: '/' })
  }

  return <div>{JSON.stringify(post)}</div>
}
