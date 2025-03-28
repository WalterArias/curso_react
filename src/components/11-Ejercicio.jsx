import { useState } from "react";
export const Ejercicio = ({ year }) => {
  const [yearActual, setYearActual] = useState(year);
  const incrementarYear = () => {
    setYearActual(yearActual + 1);
  };

  const decrementarYear = () => {
    setYearActual(yearActual - 1);
  };

  const capturarNumeros = ({ target }) => {
    let dato = parseInt(target.value);
    if (Number.isInteger(dato)) {
      setYearActual(dato);
    } else {
      console.log("debe ingresar un numero");
    }
  };
  return (
    <>
      <h1>
        <span className="badge text-bg-secondary">{yearActual}</span>
      </h1>

      <hr />
      <input type="text" onChange={capturarNumeros} />
      <br />
      <button className="btn btn-info" onClick={incrementarYear}>
        + Año
      </button>
      <button className="btn btn-danger" onClick={decrementarYear}>
        - Año
      </button>
    </>
  );
};
