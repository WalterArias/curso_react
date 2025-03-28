import { useState } from "react";

export const Formularios = () => {
  const [persona, setDatosPersona] = useState({});

  //obtener data del formulario
  const getDatosFormulario = (e) => {
    e.preventDefault();
    let valor = e.target;
    //console.log(e.target.nombre.value);
    const datosFormulario = {
      nombre: valor.nombre.value,
      apellido: valor.apellido.value,
      email: valor.email.value,
      genero: valor.genero.value,
      biografia: valor.biografia.value,
    };
    
    setDatosPersona(datosFormulario);
  };

  return (
    <>
      <form className="mt-5" onSubmit={getDatosFormulario}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="nombre"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="apellido"
            placeholder="apellido"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email"
          />
        </div>

        <div className="mb-3">
          <select className="form-select" name="genero">
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="mb-3">
          Biografia:
          <textarea
            className="form-control"
            name="biografia"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-success" type="submit">
          Enviar
        </button>
      </form>
      <hr />
      <span className="badge text-bg-secondary">{persona.nombre}</span>
      <span className="badge text-bg-secondary">{persona.apellido}</span>
      <span className="badge text-bg-secondary">{persona.email}</span>
      <span className="badge text-bg-secondary">{persona.genero}</span>
      <span className="badge text-bg-primary">{persona.biografia}</span>
    </>
  );
};
