import styles from './navbar.module.css'

const Nav = () => {
    return (
    <nav className={styles.nav}>
        <img src='https://wolfmoondogs.com/wp-content/uploads/2022/05/wmd-icon-2022-pms.png' width="120" alt="logo" />            
        <ul className={styles.ul}>
          <li className={styles.li}>Inicio</li>
          <li className={styles.li}>Favoritos</li>
          <li className={styles.li}>Listado</li>
        </ul>
    </nav>
    )
}

export default Nav