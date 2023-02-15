import styles from './list.module.css'
import {Link} from 'react-router-dom'

const DogList = ({dog}) => {
    return (
    <tbody className={styles.tr}>
        <tr>
                <td className={styles.data}><img src={dog.image.url} alt={dog.name} width="40" height="40"/></td>
                <td className={styles.data}>{dog.name}</td>
                <td className={styles.data}>{dog.bred_for}</td>
                <td className={styles.data}>{dog.temperament?.join(',')}</td>
            </tr>
    </tbody>
    )
}

export default DogList