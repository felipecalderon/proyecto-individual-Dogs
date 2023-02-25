import DogCard from "./DogCard"
import styles from './cards.module.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { filterBreeds } from "../../redux/actions"
const Cards = () => {
    const {filteredDogs} = useSelector((state) => state)
    const dispatch = useDispatch()
    const [pageDog, setPageDog] = useState(0)
    const pocosDogs = filteredDogs.slice(pageDog, pageDog + 8)
    const paginaSgte = () => {
        if(pageDog < filteredDogs.length - 9)
        setPageDog(pageDog + 8)
    }
    const paginaAnte = () => {
        if(pageDog > 0) setPageDog(pageDog - 8)
    }
    useEffect(() => {
        dispatch(filterBreeds(""))
    }, [])

    useEffect(() => {
        setPageDog(0)
    }, [filteredDogs])
    return (
        <>
        <div className={styles.cardsFlex}>
        { 
            pocosDogs?.map((dog) => <DogCard key={dog.id} dog={dog} /> )
        }
        </div>
        <div className={styles.nextprev}>
            <button onClick={paginaAnte}>{'<'} Anterior</button>
            <button onClick={paginaSgte}>Siguiente {'>'}</button>
        </div>
        <div className={styles.contador}>
            Pagina {(pageDog + 8)/8} de { Math.ceil((filteredDogs.length)/8)}
        </div>
        </>
        )    
}

export default Cards