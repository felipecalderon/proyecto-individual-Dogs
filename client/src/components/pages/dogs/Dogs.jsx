import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllDogs } from "../../../redux/actions"
import Cards from "../../cards/Cards"
import FilterBar from "../../filters/FilterBar"

const Dogs = () => {
    const {dogs} = useSelector((state) => state)
    const dispatch = useDispatch()
    const [bg, setBg] = useState("https://images.unsplash.com/photo-1517196219270-aa1430c0189f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")

    useEffect(() => {
        dispatch(getAllDogs())
        fetch("https://api.unsplash.com/photos/random/?collections=6221583&orientation=landscape&client_id=1eXsHaR8jPSWv-89XXEeHJ9Z6oEihkGef6tM5Iu2Ca4")
        .then(res => res.json())
        .then(data => setBg(data.urls.regular))
    }, [])

    return(
        <div style={{ 
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover' 
    }}>
            <FilterBar />
            <Cards dogs={dogs}/>
        </div>
    )
}

export default Dogs