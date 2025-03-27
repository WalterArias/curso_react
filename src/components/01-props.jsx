// sugiere pascal case

//import { Fragment } from "react";

export const Propiedades = ({ nombre, apellido, estaActivo, edad }) => {
  //logica del componente

  // render del componente
  /* return <Fragment>
  </Fragment>; */
  return (
    <>
      <h1> hola mi nombre es: {nombre}</h1>
      <p>
        {/**  ojo tenga en cuenta que los boolean no los renderiza */}
        mi apellido es: {apellido} estoy matriculado: {estaActivo} y tengo {edad} de edad
      </p>
    </>
  );
};

//export default Propiedades;

/*
Props o properties : son valores a pasar entre los componente


*/


/* Propiedades.proptypes:{
nombre:proptypes.String.isRequired,
apellido:proptypes.String.isRequired,
estaActivo:proptypes.Bool.isRequired,
edad:proptypes.Number.isRequired
} */