import styles from "./work.module.css";

type WorkProps = {
    title: string;
    year: string;
    tags: string;
    description: string;
    image: string;
};

export default function Work(props: WorkProps) {
    return (
        <article className={styles.article}>
            <img className={styles.image} src={props.image} alt="Work image" />
            <div>
                <h3 className={styles.title}>{props.title}</h3>
                <div className={styles.year_tag}>
                    <span className={styles.year}>{props.year}</span>
                    <span className={styles.tag}>{props.tags}</span>
                </div>
                <p>{props.description}</p>
            </div>
        </article>
    );
}
