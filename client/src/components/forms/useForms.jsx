import { useEffect, useState } from "react";

const useForm = (callback, validate) => {

    const [values, setValues] = useState({
      pesomin: 5,
      pesomax: 80,
      alturamin: 15,
      alturamax: 100,
      vidamin: 2,
      vidamax: 35,
      arrTemperamentosId: []
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
          callback();
      }
    }, [callback, errors, isSubmitting]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);
    };
  
    const handleChange = (event) => {
      event.preventDefault();
      setValues(values => {
        return ({ ...values, 
          [event.target.name]: event.target.value 
        })
      });
    };
  
    return {
      handleChange,
      handleSubmit,
      values,
      errors,
      setValues
    }
  };
  
  export {useForm};