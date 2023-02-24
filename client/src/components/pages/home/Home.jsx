import styles from './home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
    const handleEnter = (e) => {
        e.target.setAttribute('src', 'https://i.ibb.co/L0NGZLZ/ezgif-2-6baa6ad941.gif')
    }

    const handleOut = (e) => {
        e.target.setAttribute('src', 'https://images.gamebanana.com/img/ico/sprays/char_dog_walking.gif')
    }
    return(
        <>
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>PI Dogs</h1>
                <h3>Soy Henry</h3>
                <p>Aventúrate a conocer las diferentes razas de perros y sus características</p>
                <p><i>Toca al perro old school para comenzar</i></p>
            </div>
            <div className={styles.animated}>
                <Link to='/dogs'>
                    <img onMouseOver={handleEnter} onMouseLeave={handleOut} src='https://images.gamebanana.com/img/ico/sprays/char_dog_walking.gif' alt='bg' width={300}/>
                </Link>
            </div>
        </div>
        </>
    )    
}

export default Home