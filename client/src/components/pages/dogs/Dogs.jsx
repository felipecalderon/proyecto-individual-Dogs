import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllDogs } from "../../../redux/actions"
import Cards from "../../cards/Cards"
import FilterBar from "../../filters/FilterBar"

const Dogs = () => {
    const {dogs} = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])
    return(
        <>
            <FilterBar />
            <Cards dogs={dogs}/>
        </>
    )
}

export default Dogs