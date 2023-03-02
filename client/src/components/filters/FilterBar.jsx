import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { orderBreeds, filterBreeds, getAllDogs, filterOrigin, filterDogTemperaments, filterHeight } from "../../redux/actions"
import styles from "./filterbar.module.css"

const FilterBar = () => {
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)
    const [form, setForm] = useState({
        search: "",
    })
    // HANDLES DISPATCHS
    const handleSelect = (e) => {
        dispatch(orderBreeds(e.target.value))
    }

    const handleOrigin = (e) => {
        dispatch(filterOrigin(e.target.value))
    }

    const handleSearch = (e) => {
        setForm({
            ...form,
            search: e.target.value
        })
        dispatch(filterBreeds(e.target.value))
    }

    const handleReset = () => {
        setForm({...form,
            search: ''
        })
        dispatch(getAllDogs())
    }
    
    const handleTemperament = (e) => {
        dispatch(filterDogTemperaments(e.target.value))
    }

    return (
    <>
    <div className={styles.filternav}>
        <select onChange={handleSelect} style={{width: '6em'}}>
                <option value="AZ">A-Z</option>
                <option value="ZA">Z-A</option>
                <option value="RANDOM">Aleatorio</option>
        </select>
        <select onChange={handleOrigin}>
                <option value="all">Traer todos los datos</option>
                <option value="database">Datos desde DB</option>
                <option value="externo">Datos desde API</option>
        </select>
        <select onChange={handleTemperament}>
                {temperaments?.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
        </select>
        <input 
            onChange={handleSearch} 
            name="buscar" 
            type="text" 
            value={form.search} 
            placeholder="buscar razas" autoComplete="off"
        />
        <button onClick={handleReset}>Restaurar Filtro ♻️</button>
    </div>
    </>
    )
}

export default FilterBar