import { useState } from "react"
import { useDispatch } from "react-redux"
import { orderBreeds, filterBreeds, getAllDogs, filterOrigin } from "../../redux/actions"
import styles from "./filterbar.module.css"

const FilterBar = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const handleSelect = (e) => {
        dispatch(orderBreeds(e.target.value))
    }

    const handleOrigin = (e) => {
        dispatch(filterOrigin(e.target.value))
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
        <select onChange={handleOrigin}>
                <option value="all">Traer todos los datos</option>
                <option value="database">Datos desde DB</option>
                <option value="externo">Datos desde API</option>
        </select>
        <input onChange={handleSearch} name="buscar" type="text" value={value} placeholder="buscar razas" autoComplete="off"/>
        <button onClick={handleReset}>Resetear Cards</button>
    </div>
    )
}

export default FilterBar