import axios from "axios";
export const ConsumirApi = () => {
  const leerApi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      //.then((datos) => console.log(datos))   // llega el objeto promesa
      .then((datos) => console.log(datos.data))
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <button className="btn btn-info" onClick={leerApi}>
        Leer Api
      </button>
    </>
  );
};

/*
Se pueden consumir con la API FETCH DE JS
Ecosistema REACT recomienda usar la libreria AXIOS
https://www.npmjs.com/package/axios

INSTALACION: npm install axios


*/
