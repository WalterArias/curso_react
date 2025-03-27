export const RenderCondicional3 = () => {
  const aprendices = [
    { id: 100, nombre: "pedro" },
    { id: 200, nombre: "Juan" },
    { id: 300, nombre: "Luisa" },
  ];
  //const aprendices = [];
  const editar = ({ target }) => {
    console.log(target);
    console.log("editar");
  };
  const borrar = ({ target }) => {
    console.log(target);
    console.log("borrar");
  };

  return (
    <>
      {aprendices.length === 0 ? (
        <div className="alert alert-danger" role="alert">
          No Existen aprendices en la consulta !
        </div>
      ) : (
        <table className="table table-hover">
          <tbody>
            {aprendices.map((aprendiz) => {
              return (
                <tr key={aprendiz.id}>
                  <td>{aprendiz.id}</td>
                  <td>{aprendiz.nombre}</td>
                  <td>
                    <button className="btn btn-primary" onClick={editar}>
                      Editar
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={borrar}>
                      Borrar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
