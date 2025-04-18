import axios from "axios";
export const ConsumirApi = () => {
  // consumir la api
  const leerApi = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      //.then((datos) => console.log(datos))   // llega el objeto promesa
      .then((datos) => console.log(datos.data))
      .catch((error) => console.log(error.message));
  };
  //insertar un registro
  const hacerPost = () => {
    axios
      .post("https://reqres.in/api/users", {
        name: "waroson",
        job: "jugador",
      })
      .then((respuesta) => console.log(respuesta))
      .catch((error) => console.log(error.message));
  };
  //actualizar un registro
  const hacerPut = () => {
    axios
      .put("https://reqres.in/api/users/2", {
        name: "waroson arias",
        job: "jugador de play",
      })
      .then((respuesta) => console.log(respuesta))
      .catch((error) => console.log(error.message));
  };
  //eliminar un registro
  const hacerBorrar = () => {
    axios
      .delete("https://reqres.in/api/users/2")
      .then((respuesta) => console.log(respuesta))
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <button className="btn btn-info" onClick={leerApi}>
        Leer Api
      </button>

      <button className="btn btn-success" onClick={hacerPost}>
        Metodo Post
      </button>
      <button className="btn btn-success" onClick={hacerPut}>
        Metodo Put :: actualizacion
      </button>
      <button className="btn btn-danger" onClick={hacerBorrar}>
        Borrar
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
