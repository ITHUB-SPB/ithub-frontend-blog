import styles from "./footer.module.css";

type IngLinkProps = {
  icon: string;
  href: string;
};

function ImgLink(props: IngLinkProps) {
  return (
    <a href={props.href} target="_blank">
      <svg className={styles.listMember} role="presentation" aria-hidden="true">
        <use href={`/footerIcons.svg#${props.icon}`}></use>
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.listMember}>
          <ImgLink
            href="https://www.facebook.com/?locale=ru_RU"
            icon="fb-icon"
          />
        </li>
        <li className={styles.listMember}>
          <ImgLink href="https://www.instagram.com/" icon="insta-icon" />
        </li>
        <li className={styles.listMember}>
          <ImgLink href="https://x.com" icon="twt-icon" />
        </li>
        <li className={styles.listMember}>
          <ImgLink icon="lnkdIn-icon" href="https://linkedin.com/" />
        </li>
      </ul>
      <h3 className={styles.text}>Copyright ©2020 All rights reserved </h3>
    </>
  );
}
