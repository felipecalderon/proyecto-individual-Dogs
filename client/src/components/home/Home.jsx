import { getAllDogs } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Cards from '../cards/Cards'
const Home = () => {
    const dispatch = useDispatch()
    const {dogs} = useSelector((state) => state)

    useEffect(() => {
        dispatch(getAllDogs())
    }, [])
    return(
        <>
            <Cards dogs={dogs} />
        </>
    )    
}

export default Home