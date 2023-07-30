import React from "react";
import '../hojas-de-estilo/boton.css';

function Boton(props) {

  // si valor (isNaN)=no es un (valor)numero  (&&) y no es un '.' (&&) y tampoco es un '=' retorna True
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') &&(valor != '=');
  };

  return(
    // Aqui llamo la funcion flecha=esOperador=True valor de className='boton-contenedor operador' de lo contrario 'boton-operador' .trimEnd quita espacios al final
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
}

export default Boton;