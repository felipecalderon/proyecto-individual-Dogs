import styles from './dogCard.module.css'
import {Link} from 'react-router-dom'

const DogCard = ({dog}) => {
    const temperamentos = dog.temperaments?.map(temp => {
        return <button key={temp.name || temp}>{temp.name || temp}</button>
    })

    return (
    <div className={styles.cardClient}>
        <pre>Origen: {dog.origen}</pre>
        <div className={styles.userPicture}>
            <Link to={`/dog/${dog.id}`}>
            <img src={dog.imagen} alt={dog.nombre} width="150"/>
            </Link>
        </div>
        <p className={styles.cardDetail}> 
            <Link to={`/dog/${dog.id}`}>
            {dog.nombre}
            </Link>
            {(dog.pesomin && dog.pesomax)
                ? <span><i>Peso: entre {dog.pesomin} y {dog.pesomax}kg</i></span> 
                : (dog.pesomin || dog.pesomax)
                    ? <span><i>Peso: hasta {dog.pesomin}kg</i></span> 
                    : <span><i>Sin datos de peso</i></span>}

        </p>
        <div className={styles.cardFooter}>
            { temperamentos }
        </div>
    </div>
    )
}

export default DogCard