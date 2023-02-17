const { useForm } = require("./useForms");
const { validate } = require("./validation")

const Form = () => {
    
    const login = () => {
      return console.log('No errors, submit callback called!');
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useForm(login, validate);
    

    return (
        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label className="label">Email Address</label>
            <div className="control">
              <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
              {errors.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
            </div>
            {errors.password && (
              <p className="help is-danger">{errors.password}</p>
            )}
          </div>
          <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
        </form>   
    )
}

export default Form