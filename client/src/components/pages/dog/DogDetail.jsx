import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDogDetail } from "../../../redux/actions"
import styles from './dogdetail.module.css'

const DogDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {dogDetail} = useSelector(state => state)
    const [bg, setBg] = useState("linear-gradient(#00939c, #b96a55)")
    useEffect(() => {
        dispatch(getDogDetail(id))
    }, [])

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random/?query=dog+${dogDetail.nombre}&orientation=landscape&client_id=1eXsHaR8jPSWv-89XXEeHJ9Z6oEihkGef6tM5Iu2Ca4`)
        .then(res => res.json())
        .then(data => setBg(`url(${data.urls.regular})`))
    }, [])
    return(
        <div style={{
            backgroundImage: bg,
            backgroundSize: "cover",
            paddingTop: '1em',
        }}>
        <h2>Raza: {dogDetail.nombre}</h2>
        <div className={styles.container}>
            <div className={styles.imageLeft}>
                <img src={dogDetail.imagen} alt={dogDetail.nombre} width="400"/>
                <div className={styles.detail}>
                    <h4>Caracteristicas: </h4>
                    <div className={styles.temperaments}>
                        {dogDetail.temperaments?.map(temp => <button key={temp.name || temp}>{temp.name || temp}</button> )}
                    </div>
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