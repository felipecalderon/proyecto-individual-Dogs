function validate({nombre, imagen, pesomin, pesomax, alturamin, alturamax, vidamin, vidamax, temperamentos}) {
    
  let errors = {};
    const urlRegex = /(https?:\/\/.*\.(?:png|jpg))/g
    
    if (!nombre) errors.nombre = 'Se necesita un nombre para la raza';
    else if (nombre.length < 3) errors.nombre = 'Nombre de raza demasiado corto';
    if (temperamentos.length === 0) errors.temperamentos = 'Selecciona al menos 1 temperamento';
    if (!imagen) errors.imagen = 'Ingresa la dirección http donde está la imagen';
    else if (!urlRegex.test(imagen)) errors.imagen = 'Link inválido'
    if (pesomin === 5 && pesomax === 80) errors.peso = 'Falta ajustar peso de la raza';
    if (alturamin === 15 && alturamax === 100) errors.altura = 'Falta ajustar altura de la raza';
    if (vidamin === 2 && vidamax === 35) errors.vida = 'Falta ajustar edad de la raza';

    return errors;
  };
  
  export {validate}