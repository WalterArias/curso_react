import { useState } from "react";
export const RenderCondicional2 = () => {
  const [activo, setActivo] = useState();

  const encender = () => {
    setActivo(true);
  };

  const apagar = () => {
    setActivo(false);
  };

  return (
    <>
      <button className="btn btn-success" onClick={encender}>
        activar
      </button>
      <button className="btn btn-danger" onClick={apagar}>
        apagar
      </button>
      <hr></hr>
      {activo ? (
        <span className="badge text-bg-primary">encendido</span>
      ) : (
        <span className="badge text-bg-danger">Apagado</span>
      )}
    </>
  );
};
