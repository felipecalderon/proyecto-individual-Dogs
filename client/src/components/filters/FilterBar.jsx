import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { orderBreeds, filterBreeds, getAllDogs, filterOrigin, filterDogTemperaments } from "../../redux/actions"
import styles from "./filterbar.module.css"

const FilterBar = () => {
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)
    const [value, setValue] = useState('')
    // HANDLES DISPATCHS
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
    
    const handleTemperament = (e) => {
        dispatch(filterDogTemperaments(e.target.value))
    }
    return (
    <div className={styles.filternav}>
        <select onClick={handleSelect}>
                <option value="AZ">A-Z</option>
                <option value="ZA">Z-A</option>
                <option value="RANDOM">Aleatorio</option>
        </select>
        <select onClick={handleOrigin}>
                <option value="all">Traer todos los datos</option>
                <option value="database">Datos desde DB</option>
                <option value="externo">Datos desde API</option>
        </select>
        <select onChange={handleTemperament}>
                {temperaments?.map(t => <option value={t.name || t}>{t.name}</option>)}
        </select>
        <input onChange={handleSearch} name="buscar" type="text" value={value} placeholder="buscar razas" autoComplete="off"/>
        <button onClick={handleReset}>Resetear Cards</button>
    </div>
    )
}

export default FilterBar