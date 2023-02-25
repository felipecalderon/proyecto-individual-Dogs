import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllDogs } from "../../../redux/actions"
import Cards from "../../cards/Cards"
import FilterBar from "../../filters/FilterBar"
import styles from '../../cards/cards.module.css'

const Dogs = () => {
    const {dogs} = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])
    return(
        <div style={{
            backgroundImage: 'linear-gradient(#00939c, #b96a55)',
        }}>
            <FilterBar />
            <Cards dogs={dogs}/>
        </div>
    )
}

export default Dogs