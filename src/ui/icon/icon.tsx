import styles from "./icon.module.css";

type IconProps = {
    title: string;
    link: string;
    icon: string;
};

export default function Icon(props: IconProps) {
    return (
        <a href={props.link}>
            <img
                className={styles.icon}
                src={props.icon}
                alt={props.title + "icon"}
            />
        </a>
    );
}
