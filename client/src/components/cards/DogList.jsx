import styles from './list.module.css'
import {Link} from 'react-router-dom'

const DogList = ({dog}) => {
    return (
    <tbody className={styles.tr}>
            <tr>
                <td className={styles.data}>
                    <Link to={`/dog/${dog.id}`} className={styles.link}>
                    <img src={dog.imagen} alt={dog.nombre} width="40" height="40"/>
                    </Link>
                </td>
                <td className={styles.data}>
                <Link to={`/dog/${dog.id}`} className={styles.link}>
                    {dog.nombre}
                </Link>   
                    </td>
                <td className={styles.data}>{dog.temperaments?.map(temp => {
                    return <button>{temp?.name || temp}</button> })}</td>
            </tr>
    </tbody>
    )
}

export default DogList