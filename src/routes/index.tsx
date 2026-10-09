import { createFileRoute } from '@tanstack/react-router'
import { posts } from '../data'
import Post from "../ui/post/post"

export const Route = createFileRoute('/')({
    component: HomePage,
})

function HomePage() {
    return (
        <>
            <h1>Hi, I am John, Creative Technologist</h1>
            <section>
                <h2>Recent posts</h2>
                <div className="row">
                    {posts.map(post => <Post id={post.id} title={post.title} date={post.createdAt} text={post.text} />)}
                </div>
            </section>
        </>
    )
}

