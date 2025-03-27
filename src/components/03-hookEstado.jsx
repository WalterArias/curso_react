// hacemos destructuring de REACT y solo traemos el hook useState
import { useState } from "react";
export const HookEstado = ({ inicial }) => {
  /* ejemplo de uso de un hook: useState: cambia el estado al componente*/

  const [contador, setContador] = useState(inicial );
  /* contador es el estado, setContador es la funcion 
 que va a actualizar el estado,
 inicializamos contador en 0*/

  const actualizarContador = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h1>{contador}</h1>
      <button className="btn btn-success" onClick={actualizarContador}>
        +1
      </button>
    </>
  );
};
