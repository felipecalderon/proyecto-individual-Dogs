import { useForm } from "./useForms";
import { validate } from "./validation"
import styles from './form.module.css'
import { useDispatch, useSelector } from "react-redux";
import { filterTemperaments, getTemperaments } from "../../redux/actions";
import { useEffect } from "react";

const Form = () => {
    const { filteredTemps } = useSelector(state => state)
    const dispatch = useDispatch()
    const login = () => {
      return console.log('No errors, submit callback called!');
    }
    const filterTemps = () => {
        dispatch(filterTemperaments(values.temperamentos))
    }
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useForm(login, validate);
    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])
    return (
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
            <label>Peso promedio de raza {values.nombre}</label>
            <div className={styles.ranges}>
              <input type="range" className={styles.left} min={5} max={values.pesomax} step={1} name="pesomin" onChange={handleChange} value={values.pesomin} required />
              <input type="range" className={styles.right} min={values.pesomin} max={80} step={1}  name="pesomax" onChange={handleChange} value={values.pesomax} required />
            </div>
            {values.pesomax && (
              <p>Entre {values.pesomin}kg y {values.pesomax}kg</p>
            )}
          </div>

          <div className={styles.fieldset}>
            <label>Altura promedio</label>
            <div className={styles.ranges}>
              <input type="range" className={styles.left} min={15} max={values.alturamax} step={1} name="alturamin" onChange={handleChange} value={values.alturamin} required />
              <input type="range" className={styles.right} min={values.alturamin} max={100} step={1}  name="alturamax" onChange={handleChange} value={values.alturamax} required />
            </div>
            {values.alturamax && (
              <p>Desde {values.alturamin}cm a {values.alturamax}cm</p>
            )}
          </div>

          <div className={styles.fieldset}>
            <label>Años de vida promedio</label>
            <div className={styles.ranges}>
              <input type="range" className={styles.left} min={2} max={values.vidamax} step={1} name="vidamin" onChange={handleChange} value={values.vidamin} required />
              <input type="range" className={styles.right} min={values.vidamin} max={35} step={1}  name="vidamax" onChange={handleChange} value={values.vidamax} required />
            </div>
            {values.vidamax && (
              <p>Vive entre {values.vidamin} y {values.vidamax} años</p>
            )}
          </div>
          
          <div className={styles.fieldset}>
            <label>Agrega temperamentos</label>
            <input autoComplete="off" type="text" name="temperamentos" onKeyUp={filterTemps} onChange={handleChange} value={values.temperamentos || ''} required />
            <div className={styles.control}>
              {errors.temperamentos && (
                <p>{errors.temperamentos}</p>
              )}
            </div>
            <div className={styles.temperamentos}>
            {
            filteredTemps?.map(temp => <li key={temp.name} name={temp.name} className={styles.btn}>{temp.name}</li>)
            }
            </div>

          </div>

          <button type="submit" className={styles.button}>Agregar Raza</button>
        </form>   
    )
}

export default Form