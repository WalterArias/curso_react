/*
- maquetacion
- hook : useState
*/

import { useState } from "react";
export const Calculadora = () => {
  /* el estado principal del componente es el resultado,
  el resultado lo controlamos con el hook(funciones del programador dadas por react)
  el hook useState es el hopk que permite cambiar los "estados de un componente"
  Piense siempre en un componente como en un LEGO (cada lego tiene forma y funcionalidad propia)
  una SPA (Single Page Application) es una figura armada con legos, o sea una sola pagina con muchos componentes
  los estados de un componente SOLO se pueden cambiar con su metodo o funcion propia setXXXXX   
  */

  const [resultado, setResultado] = useState("");

  //const actualizarInput = (evento.target) => {
  const actualizarInput = ({ target }) => {
    // usamos el traversing del DOM para obtener el valor
    //console.log(target.innerText);

    setResultado(resultado.concat(target.innerText));
  };

  const borrar = () => {
    setResultado("");
  };

  const calcular = () => {
    setResultado(eval(resultado));
  };
  return (
    <>
      <h1>Calculadora</h1>
      <div className="calculadora">
        <div className="row mt-2">
          <div className="col-12">
            <input className="form-control" type="text" value={resultado} />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-4">
            <button className="btn btn-danger btn-lg" onClick={borrar}>
              {" "}
              Borrar
            </button>
          </div>
          <div className="col-4">
            <button className="btn btn-light btn-lg">back</button>
          </div>
          <div className="col-4">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              {" "}
              /
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">
            <button
              className="btn btn-light btn-lg"
              name="7"
              onClick={actualizarInput}
            >
              7
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-light btn-lg"
              name="8"
              onClick={actualizarInput}
            >
              8
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              {" "}
              9
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              *
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              {" "}
              4
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              5
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              {" "}
              6
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              {" "}
              -
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              {" "}
              1
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              2
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              {" "}
              3
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              {" "}
              +
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              {" "}
              0
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-light btn-lg" onClick={actualizarInput}>
              .
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-success btn-lg" onClick={calcular}>
              Calcular
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
