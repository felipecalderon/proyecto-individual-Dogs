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
        <div>
        <h2>Raza: {dogDetail.nombre}</h2>
        <div className={styles.container}>
            <div className={styles.imageLeft}>
                <img src={dogDetail.imagen} alt={dogDetail.nombre} width="400"/>
                <div className={styles.detail}>
                    <h3>Caracteristicas: </h3>

                    {   dogDetail.temperaments?.map(temp => {
                        if(temp.name) return <li>{temp.name}</li>
                        return <li>{temp}</li> })}
                    {
                        (dogDetail.pesomin && dogDetail.pesomax)
                        ? <span>Peso: entre {dogDetail.pesomin} y {dogDetail.pesomax}kg</span> 
                        : (dogDetail.pesomin || dogDetail.pesomax)
                            ? <span>Peso: hasta {dogDetail.pesomin}kg</span> 
                            : <span>Sin datos de peso</span>
                    }

                    {(dogDetail.vidamin && dogDetail.vidamax)
                        ? <span><i>Vive alrededor de {dogDetail.vidamin} y {dogDetail.vidamax} años.</i></span> 
                        : ''}

                    {(dogDetail.alturamin && dogDetail.alturamax)
                        ? <span><i>Mide desde {dogDetail.alturamin} a {dogDetail.alturamax}cm.</i></span> 
                        : ''
                    }

                </div>
            </div>
        </div>
    </div>
    )
}

export default DogDetail