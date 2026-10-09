import { Link } from '@tanstack/react-router'
import './post.css'

type PostProps = {
    id: number,
    title: string,
    date: string,
    text: string
}

export default function Post(props: PostProps) {
    return (
        <article className="post">
            <Link to="/post/$postId" params={{ postId: props.id }}>
                <h3>{props.title}</h3>
            </Link>
            <section className="post__meta">
                <span className='post__meta__item'>{props.date}</span>
                <span className='post__meta__item'>Design, Pattern</span>
            </section>
            <p>{props.text}</p>
        </article>
    )
}