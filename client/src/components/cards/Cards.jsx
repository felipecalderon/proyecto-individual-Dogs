import DogCard from "./DogCard"
import styles from './cards.module.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { filterBreeds } from "../../redux/actions"
import Not from "../404/Notfound"
const Cards = () => {
    const {filteredDogs} = useSelector((state) => state)
    const dispatch = useDispatch()
    const [pageDog, setPageDog] = useState(0)
    const btnPrev = useRef();
    const btnNext = useRef();
    const pocosDogs = filteredDogs.slice(pageDog, pageDog + 8)

    const paginaSgte = () => {
        if(pageDog < filteredDogs.length - 9)
        setPageDog(pageDog + 8)
    }

    const paginaAnte = (e) => {
        if(pageDog > 0) setPageDog(pageDog - 8)
    }

    useEffect(() => {
        dispatch(filterBreeds(""))
    }, [])

    useEffect(() => {
        setPageDog(0)
    }, [filteredDogs])

    useEffect(() => {
        // INSERTA ESTILO SI SE LLEGA AL FINAL O INICIO
        if((pageDog + 8)/8 === 1) btnPrev.current.setAttribute('style', 'cursor: no-drop')
        else btnPrev.current.setAttribute('style', '')
        if(pageDog > filteredDogs.length - 8) btnNext.current.setAttribute('style', 'cursor: no-drop')
        else btnNext.current.setAttribute('style', '')
        // DESMONTA EL COMPONENTE
    }, [pageDog, filteredDogs])
    return (
        <>
        <div className={styles.cardsFlex}>
        {   pocosDogs.length > 0
            ? pocosDogs?.map((dog) => <DogCard key={dog.id} dog={dog} /> )
            : <Not />
        }
        </div>
        <div className={styles.nextprev}>
            <button onClick={paginaAnte} ref={btnPrev}>{'<'} Anterior</button>
            <button onClick={paginaSgte} ref={btnNext}>Siguiente {'>'}</button>
        </div>
        <div className={styles.contador}>
            Pagina {(pageDog + 8)/8} de { filteredDogs.length === 0 ? 1 : Math.ceil((filteredDogs.length)/8)}
        </div>
        </>
        )    
}

export default Cards