import styles from './dogCard.module.css'
import {Link} from 'react-router-dom'

const DogCard = ({dog}) => {
    return (
    <Link to={`/dog/${dog.id}`} className={styles.cardClient}>
        <div className={styles.userPicture}>
            <img src={dog.image.url} alt={dog.name} width="150"/>
        </div>
        <p className={styles.cardDetail}> 
            {dog.name}
            <span>{dog.bred_for}</span> 
        </p>
        <div className={styles.cardFooter}>
            {dog.temperament?.map(temp => <li key={temp}>{temp}</li>).slice(0,3)}
        </div>
    </Link>
    )
}

export default DogCard