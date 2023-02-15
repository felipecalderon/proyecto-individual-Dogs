import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDogDetail } from "../../../redux/actions"
import styles from './dogdetail.module.css'

const DogDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {dogDetail} = useSelector(state => state)
    useEffect(() => {
        dispatch(getDogDetail(id))
    }, [])

    return(
        <div className={styles.container}>
            {
            !dogDetail 
            ? <p>No se encontró Raza</p>
            : <div className={styles.imageLeft}>
                <img src={dogDetail.image?.url} alt={dogDetail.name} width="400"/>
                <div className={styles.detail}>
                    <p>Nombre de raza: {dogDetail.name}</p>
                    <p>Detalle: {dogDetail.bred_for}</p>
                    <p>Caracteristicas: </p>
                        {
                            dogDetail.temperament?.map(temp => {
                                return <li key={temp}>{temp}</li>
                            })
                        }

                </div>
            </div>
            }
        </div>
    )
}

export default DogDetail