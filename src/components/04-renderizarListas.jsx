export const RenderLista = () => {
  const ciudades = ["Cali", "Medellin", "Pasto", 120, true];

  return (
    <>
      <h1> render lista</h1>

      <ol>
        {ciudades.map((ciudad) => {
          return <li key={ciudad}>{ciudad}</li>;
        })}
      </ol>
    </>
  );
};

/* 
Tener en cuenta el virtual dom (Objeto Global de REACT)
- Usar solamente map para recorrer arreglos u objetos
- tener en cuenta la key por cada linea en una lista
- no olvidar {} para incrustar expresiones js en la parte del render del componente
- Recuerde la estructura del componente REACT 1. LOGICA 2. RENDER
- Recuerde que un componente es una pieza de codigo con estados y propiedades
- los componentes se comunican entre si y tienen una jerarquia
- recordar que las variables o props boolean se usan PERO no se renderiza
*/
