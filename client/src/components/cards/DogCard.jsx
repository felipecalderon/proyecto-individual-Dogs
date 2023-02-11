import styles from './dogCard.module.css'
import {Link} from 'react-router-dom'

const DogCard = ({dog}) => {
    return (
        <div key={dog.id} className={styles.cardClient}>
            <Link to={`/dog/${dog.id}`}>
                <div className={styles.userPicture}>
                    <img src={dog.image.url} alt={dog.name} width="120"/>
                </div>
            </Link>
            <p className={styles.cardDetail}> 
                {dog.name}
            <span>{dog.bred_for}</span> 
            </p>
            <div className={styles.cardFooter}>
                {dog.temperament}
            </div>
        </div>
    )
}

export default DogCard