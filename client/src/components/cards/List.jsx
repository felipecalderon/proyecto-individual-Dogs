import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import DogList from "./DogList"
import styles from './list.module.css'
const List = () => {
    const {filteredDogs} = useSelector(state => state)
    const [page, setPage] = useState(8)
    const part = filteredDogs.slice(0, page)
    const moreDogs = () => {
        setPage(page + 8)
    }

    return (
        <>
        <table className={styles.table}>
            { part?.map((dog) => <DogList key={dog.id} dog={dog} /> )}
        </table>
        <div className={styles.infooter}>
        {
            (page <= filteredDogs.length)
            ? <button onClick={moreDogs}>Cargar más ✖️</button>
            : <p>Esos son todas las razas <span>🐶</span></p>
        }
        </div>
        </>
        )    
}

export default List