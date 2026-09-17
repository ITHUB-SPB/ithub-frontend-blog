import "./post.css";

type PostProps = {
  title: string;
  date: string;
  annotation: string;
};

export default function Post(props: PostProps) {
  return (
    <article className="post">
      <h3>{props.title}</h3>
      <div className="post-textbox">
        <section className="post__meta">
          <span className="post__meta__item">{props.date}</span>
          <span className="post__meta__item">{props.annotation}</span>
        </section>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </article>
  );
}
