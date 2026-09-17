import styles from './nav.module.css'

type PageName = 'home' | 'works'

type NavProps = {
  active: PageName,
  setPage: (name: PageName) => void
}

export default function Nav(props: NavProps) {
  function computeLinkStyles(page: PageName) {
    return `${styles.link} ${props.active === page ? styles.active : ""}`
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <span className={computeLinkStyles('home')} onClick={() => props.setPage('home')}
          >Home</span>
        </li>
        <li>
          <span className={computeLinkStyles('works')} onClick={() => props.setPage('works')}
          >Works</span>
        </li>
      </ul>
    </nav>
  )
}