import { useState } from "react";
import axios from "axios";

export const ConsumirApiAW = () => {
  const [respuesta, setRespuesta] = useState([]);
  const [pagina, setPagina] = useState();

  const leerApi = async () => {
    let { data } = await axios.get("https://reqres.in/api/users?page=2");
    setRespuesta(data.data);
    setPagina(data.page);
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

      <hr />
      <span className="bg bg-dark text-white p-2">{pagina}</span>
      <hr />
      <ol>
        {respuesta.map((usuario) => {
          return (
            <li key={usuario.id}>
              {usuario.first_name}
              <img src={usuario.avatar} alt="" />
              <hr />
            </li>
          );
        })}
      </ol>
    </>
  );
};
