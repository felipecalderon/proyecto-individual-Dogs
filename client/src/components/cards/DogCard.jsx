import styles from './dogCard.module.css'
import {Link} from 'react-router-dom'

const DogCard = ({dog}) => {
    const temperamentos = dog.temperaments?.map(temp => {
        if(typeof temp === 'string') return <li key={temp}>{temp}</li>
        return <li key={temp.id}>{temp.name}</li>
    })

    return (
    <Link to={`/dog/${dog.id}`} className={styles.cardClient}>
        <div className={styles.userPicture}>
            <img src={dog.imagen} alt={dog.nombre} width="150"/>
        </div>
        <p className={styles.cardDetail}> 
            {dog.nombre}
            <span>Origen: {dog.origen}</span> 
        </p>
        <div className={styles.cardFooter}>
            { temperamentos?.slice(0,3) }
        </div>
    </Link>
    )
}

export default DogCard