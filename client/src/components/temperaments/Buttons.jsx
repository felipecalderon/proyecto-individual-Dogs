import styles from './buttons.module.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getTemperaments, filterDogTemperaments } from "../../redux/actions"
import { useState } from 'react'

const Buttons = () => {
    const dispatch = useDispatch()
    const { temperaments } = useSelector(state => state)
    const [page, setPage] = useState(10)
    const handleTemp = (e) => {
        dispatch(filterDogTemperaments(e.target.name))
    }

    const verMas = () => {
        setPage(page + 15)
    }
    
    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])


    return (
        <div className={styles.container}>
            <h5>¡Escoge algun temperamento y encuentra las razas compatibles!</h5>
            <div className={styles.buttons}>
            {temperaments?.map(temp => <button onClick={handleTemp} key={temp.name} name={temp.name} className={styles.btn}>{temp.name}</button>).slice(0, page)}      
            {
            ((page <= temperaments.length))
                ? <button onClick={verMas} className={styles.btn}>...ver más</button>
                : ''
            }
            </div>
        </div>
    )
}

export default Buttons