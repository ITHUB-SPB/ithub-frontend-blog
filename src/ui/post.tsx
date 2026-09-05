import './post.css'

type PostProps = {
    title: string,
    date: string
}

export default function Post(props: PostProps) {
    return (
        <article className="post">
            <h3>{props.title}</h3>
            <section className="post__meta">
                <span className='post__meta__item'>{props.date}</span>
                <span className='post__meta__item'>Design, Pattern</span>
            </section>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
        </article>
    )
}