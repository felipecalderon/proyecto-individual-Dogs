import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
    <nav className={styles.nav}>
        <img src='https://wolfmoondogs.com/wp-content/uploads/2022/05/wmd-icon-2022-pms.png' width="120" alt="logo" />            
        <ul className={styles.ul}>
            <Link to="/"><li className={styles.li}>Inicio</li></Link>
            <Link to="/dogs"><li className={styles.li}>Razas</li></Link>
            <Link to="/add"><li className={styles.li}>Agregar</li></Link>
        </ul>
    </nav>
    )
}

export default Nav