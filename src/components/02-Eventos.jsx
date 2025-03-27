export const EventosReact = () => {
  //logica
  const Saludar = () => {
    console.log("click desde el boton !");
  };
  //render
  return (
    <>
      <button className="btn btn-primary" onClick={Saludar}>Enviar</button>
    </>
  );
};
