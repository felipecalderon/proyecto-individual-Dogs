import DogCard from "./DogCard"
import styles from './cards.module.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { filterBreeds } from "../../redux/actions"
import Not from "../404/Notfound"
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
        {   pocosDogs.length > 0
            ? pocosDogs?.map((dog) => <DogCard key={dog.id} dog={dog} /> )
            : <Not />
        }
        </div>
        <div className={styles.nextprev}>
            <button onClick={paginaAnte}>{'<'} Anterior</button>
            <button onClick={paginaSgte}>Siguiente {'>'}</button>
        </div>
        <div className={styles.contador}>
            Pagina {(pageDog + 8)/8} de { filteredDogs.length === 0 ? 1 : Math.floor((filteredDogs.length)/8)}
        </div>
        </>
        )    
}

export default Cards