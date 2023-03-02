import { useForm } from "./useForms";
import { validate } from "./validation"
import styles from './form.module.css'
import { useDispatch, useSelector } from "react-redux";
import { filterTemperaments, getTemperaments, antiFilterTemp, createDog } from "../../redux/actions";
import { useEffect, useRef, useState } from "react";
import DogCard from "../cards/DogCard";

const Form = () => {
    const { filteredTemps, temperaments } = useSelector(state => state)
    const dispatch = useDispatch()
    const myRef = useRef(null)
    const [tempsDisplay, setTempsDisplay] = useState([])
    const [showPreview, setShowPreview] = useState(false)

    const sendForm = async () => {
        const dp = await dispatch(createDog(values))
        if(dp.original?.detail) return alert(dp.original.detail)
        alert(`Raza: ${values.nombre} creada exitosamente`)
        window.location.reload(false)
    }

    const { values, errors, handleChange, handleSubmit } = useForm(sendForm, validate);
    const filterTemps = () => {
        dispatch(filterTemperaments(values.buscar))
    }

    const handleOptions = (e) => {
      values.arrTemperamentosId = [...values.arrTemperamentosId, e.target.id]
      setTempsDisplay([...tempsDisplay, e.target.value])
      e.target.setAttribute('hidden', true)
    }

    const cleanOption = (e) => {
      const filtro = tempsDisplay.filter(t => t !== e.target.name)
      const {id} = temperaments.find(t => t.name === e.target.name)
      dispatch(antiFilterTemp(e.target.name))
      setTempsDisplay(filtro)
      values.arrTemperamentosId = values.arrTemperamentosId.filter(t => t !== id)
    }

    const handlePreview = (e) => {
      setTimeout(() => {
        myRef.current.scrollIntoView()
      }, 50)
      setShowPreview(true)
    }
    
    useEffect(() => {
      dispatch(getTemperaments())
      dispatch(filterTemperaments(''))
    }, [])

    useEffect(() => {
      let spaces = values?.nombre?.split(' ')
      let str2 = spaces?.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
      let unido = str2?.join(' ')
      values.nombre = unido
    }, [values.nombre])
    
    let dogpreview = {
      temperaments: tempsDisplay,
      origen: 'database',
      id: '#',
      imagen: values.imagen,
      nombre: values.nombre,
      pesomin: values.pesomin,
      pesomax: values.pesomax
    }
    return (
      <div style={{
        backgroundImage: 'linear-gradient(#00939c, #b96a55)',
        paddingTop: '1em',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }}>
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.fieldset}>
            <label>Nombre de la raza</label>
            <input autoComplete="off" type="text" name="nombre" onChange={handleChange} value={values.nombre || ''} required />
            <div className={styles.control}>
              {errors.nombre && (
                <p>{errors.nombre}</p>
              )}
              </div>
          </div>

          <div className={styles.fieldset}>
            <label>Link de la imagen</label>
              <input type="url" name="imagen" onChange={handleChange} value={values.imagen || ''} required />
            <div className={styles.control}>
            {errors.imagen && (
              <p>{errors.imagen}</p>
              )}
            </div>
          </div>

          <div className={styles.fieldset}>
            <label>Peso promedio de raza</label>
            <div className={styles.ranges}>
              <input type="range" className={styles.left} min={5} max={(Number(values.pesomax) - 1)} step={1} name="pesomin" onChange={handleChange} value={values.pesomin} required />
              <input type="range" className={styles.right} min={(Number(values.pesomin) + 1)} max={80} step={1}  name="pesomax" onChange={handleChange} value={values.pesomax} required />
            </div>
            {values.pesomax && (
              <p>Entre {values.pesomin}kg y {values.pesomax}kg</p>
            )}
          <div className={styles.control}>
              {errors.peso && (
                <p>{errors.peso}</p>
              )}
          </div>
          </div>

          <div className={styles.fieldset}>
            <label>Altura promedio</label>
            <div className={styles.ranges}>
              <input type="range" className={styles.left} min={15} max={(Number(values.alturamax) - 1)} step={1} name="alturamin" onChange={handleChange} value={values.alturamin} required />
              <input type="range" className={styles.right} min={(Number(values.alturamin) + 1)} max={100} step={1}  name="alturamax" onChange={handleChange} value={values.alturamax} required />
            </div>
            {values.alturamax && (
              <p>Desde {values.alturamin}cm a {values.alturamax}cm</p>
            )}
          <div className={styles.control}>
              {errors.altura && (
                <p>{errors.altura}</p>
              )}
          </div>
          </div>

          <div className={styles.fieldset}>
            <label>Años de vida promedio</label>
            <div className={styles.ranges}>
              <input type="range" className={styles.left} min={2} max={(Number(values.vidamax) - 1)} step={1} name="vidamin" onChange={handleChange} value={values.vidamin} required />
              <input type="range" className={styles.right} min={(Number(values.vidamin) + 1)} max={35} step={1}  name="vidamax" onChange={handleChange} value={values.vidamax} required />
            </div>
            {values.vidamax && (
              <p>Vive entre {values.vidamin} y {values.vidamax} años</p>
            )}
          <div className={styles.control}>
              {errors.vida && (
                <p>{errors.vida}</p>
              )}
          </div>
          </div>
          
          <div className={styles.fieldset}>
            <label>Agrega temperamentos</label>
            <input autoComplete="off" name="buscar" value={values.buscar || ""} type="text" onKeyUp={filterTemps} onChange={handleChange} required />

            <div className={styles.temperamentos}>
            <select multiple>
              {filteredTemps?.map(temp => <option onClick={handleOptions} id={temp.id} key={temp.name} value={temp.name}>{temp.name}</option>)}
            </select>
            </div>

            <div className={styles.tempsDisplay}>
            {tempsDisplay?.map(temp => {
              return <button name={temp} key={temp} onClick={cleanOption}>{temp}</button>
            })}
            </div>

            <div className={styles.control}>
              {errors.arrTemperamentosId && (
                <p>{errors.arrTemperamentosId}</p>
              )}
            </div>
          </div>

          <button type="submit" className={styles.button}>Agregar Raza</button>
        </form> 
        <button ref={myRef} onClick={handlePreview} className={styles.button}>Vista previa</button><br></br>
        { showPreview &&
          <div className={styles.preview} >
            <pre>Vista previa:</pre>
            <DogCard dog={dogpreview} />
          </div>
        }
      </div>
    )
}

export default Form