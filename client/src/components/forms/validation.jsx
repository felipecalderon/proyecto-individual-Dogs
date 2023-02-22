function validate(values) {
    let errors = {};
    if (!values.nombre) errors.nombre = 'Se necesita un nombre para la raza';

    if (!values.imagen) errors.imagen = 'Ingresa la dirección http donde está la imagen';
    else if (values.imagen.length < 8) errors.imagen = 'Password must be 8 or more characters';

    return errors;
  };
  
  export {validate}