import styles from './createbreed.module.css'

const CreateBreed = () => {
    return (
    <div className={styles.section}>
        <h2>Agrega una raza de perro</h2>
        <p>Lee y agrega los detalles del formulario</p>

        <form className={styles.formCss}>
            <fieldset className={styles.fieldset}>
            <input className={styles.input} name="firstName" type="text" autoComplete="off" required />
            <label className={styles.formLabel} for="firstName">Nombre de la Raza</label>
            </fieldset>
            <fieldset>
            <input className={styles.input} name="lastName" type="text" autoComplete="off" required />
            <label className={styles.formLabel} for="lastName">Años promedio de vida</label>
            </fieldset>
            <fieldset>
            <input className={styles.input} name="email" type="text" autoComplete="off" required />
            <label className={styles.formLabel} for="email">Temperamento</label>
            </fieldset>
        </form>
        </div>
    )
}

export default CreateBreed