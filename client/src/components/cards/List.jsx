import { useEffect } from "react"
import { useSelector } from "react-redux"
import DogList from "./DogList"
import styles from './list.module.css'
const List = () => {
    const {filteredDogs} = useSelector(state => state)
    const page = filteredDogs.slice(0,5)
    useEffect(() => {
    }, [])
    return (
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Raza</th>
                        <th>Detalle</th>
                        <th>Temperamento</th>
                    </tr>
                </thead>
        { 
            page?.map((dog) => <DogList key={dog.id} dog={dog} /> )
        }
        </table>
        )    
}

export default List