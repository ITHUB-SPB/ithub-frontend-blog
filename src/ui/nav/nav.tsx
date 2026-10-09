import { Link } from '@tanstack/react-router'
import styles from './nav.module.css'


export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link to='/' className={styles.link} activeProps={{ className: styles.active }}>Home</Link>
        </li>
        <li>
          <Link to='/works' className={styles.link} activeProps={{ className: styles.active }}>Works</Link>
        </li>
      </ul>
    </nav>
  )
}