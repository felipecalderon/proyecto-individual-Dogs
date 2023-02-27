import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllDogs } from "../../../redux/actions"
import Cards from "../../cards/Cards"
import FilterBar from "../../filters/FilterBar"
import styles from '../../cards/cards.module.css'

const Dogs = () => {
    const {dogs} = useSelector((state) => state)
    const dispatch = useDispatch()
    const [bgImg, setBgImg] = useState('linear-gradient(#00939c, #b96a55)')
    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])

    useEffect(() => {
        fetch("https://api.unsplash.com/photos/random/?topic=textures-patterns&client_id=1eXsHaR8jPSWv-89XXEeHJ9Z6oEihkGef6tM5Iu2Ca4")
        .then(res => res.json())
        .then(data => setBgImg(data.urls.regular))
      }, [])

    return(
        <div style={{
            backgroundImage: bgImg,
        }}>
            <FilterBar />
            <Cards dogs={dogs}/>
        </div>
    )
}

export default Dogs