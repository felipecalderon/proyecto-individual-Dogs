import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Cards from "../../cards/Cards"
import FilterBar from "../../filters/FilterBar"

const Dogs = () => {
    const {dogs} = useSelector((state) => state)
    return(
        <>
            <FilterBar />
            <Cards dogs={dogs}/>
        </>
    )
}

export default Dogs