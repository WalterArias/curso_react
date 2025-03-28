import { useState, useEffect } from "react";
import axios from "axios";
export const EfectoCarga = () => {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);
  //
  const leerApi = () => {
    setTimeout(async () => {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(data);
      setCargando(false);
    }, 5000);
  };
  //
  useEffect(() => {
    leerApi();
  }, []);

  /// seccion de render del componente
  return (
    <>
      {cargando ? (
        <button className="btn btn-success" type="button" disabled>
          <span
            className="spinner-grow spinner-grow-sm"
            aria-hidden="true"
          ></span>
          <span role="status"> Cargando...</span>
        </button>
      ) : (
        <>
          {data.map((dato) => {
            return <span key={dato.id}>{dato.title}</span>;
          })}
        </>
      )}
    </>
  );
};
