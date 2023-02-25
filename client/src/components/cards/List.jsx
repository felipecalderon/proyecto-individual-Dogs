import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import DogList from "./DogList"
import styles from './list.module.css'
const List = () => {
    const {dogsTemperament, filteredDogs} = useSelector(state => state)
    const [page, setPage] = useState(8)
    const moreDogs = () => {
        setPage(page + 8)
    }
    useEffect(() => {
        console.log(filteredDogs)
        setPage(8)
    }, [filteredDogs])

    return (
        <>
        <table className={styles.table}>
            { dogsTemperament?.map((dog) => <DogList key={dog.id} dog={dog} /> ).slice(0, page)}
        </table>
        <div className={styles.infooter}>
        {
            (page <= dogsTemperament.length)
            ? <button onClick={moreDogs}>Cargar más ✖️</button>
            : <p>Esos son todas las razas <span>🐶</span></p>
        }
        </div>
        </>
        )    
}

export default List