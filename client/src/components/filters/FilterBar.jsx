import { useState } from "react"
import { useDispatch } from "react-redux"
import { orderBreeds, filterBreeds, getAllDogs } from "../../redux/actions"
import styles from "./filterbar.module.css"

const FilterBar = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const handleSelect = (e) => {
        dispatch(orderBreeds(e.target.value))
    }

    const handleSearch = (e) => {
        setValue(e.target.value)
        dispatch(filterBreeds(e.target.value))
    }

    const handleReset = () => {
        setValue('')
        dispatch(getAllDogs())
    }

    return (
    <div className={styles.filternav}>
        <select onChange={handleSelect}>
                <option value="AZ">Ordenar razas: A-Z</option>
                <option value="ZA">Ordenar razas: Z-A</option>
                <option value="RANDOM">Aleatorizar orden</option>
        </select>
        <input onChange={handleSearch} name="buscar" type="text" value={value} placeholder="buscar razas"/>
        <button onClick={handleReset}>Resetear Cards</button>
    </div>
    )
}

export default FilterBar