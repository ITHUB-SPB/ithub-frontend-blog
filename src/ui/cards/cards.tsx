import "./cards.css";

type CardsProps = {
  images: string;
  title: string;
  date: string;
  annotation: string;
};

export default function Cards(props: CardsProps) {
  return (
    <article className="card">
      <img src={props.images} alt="" className="card__image" />
      <div className="card__content">
        <h3>{props.title}</h3>
        <section className="card__meta">
          <span className="card__meta__item">{props.date}</span>
          <span className="card__meta__item">{props.annotation}</span>
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
