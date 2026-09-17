import styles from './footer.module.css'

type IngLinkProps = {
  text: string;
  icon: string;
  href: string;
};

function ImgLink(props: IngLinkProps) {
  return (
    <a href={props.href} target="_blank">
      <svg className="button-icon" role="presentation" aria-hidden="true">
        <use href={"/footerIcons.svg#${props.icon}"}></use>
      </svg>
      {props.text}
    </a>
  );
}

function Footer() {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.listMember}>
          <ImgLink
            text="facebook.com"
            href="https://www.facebook.com/?locale=ru_RU"
            icon="fb-icon"
          />
        </li>
        <li className={styles.listMember}>
          <ImgLink
            text="instagram.com"
            href="https://www.instagram.com/"
            icon="insta-icon"
          />
        </li>
        <li className={styles.listMember}>
          <ImgLink text="x.com" href="https://x.com" icon="twt-icon" />
        </li>
        <li className={styles.listMember}>
          <ImgLink
            text="LinkedIn.com"
            icon="lnkdIn-icon"
            href="https://linkedin.com/"
          />
        </li>
      </ul>
      <h3 className={styles.text}>Copyright ©2020 All rights reserved </h3>
    </>
  );
}
