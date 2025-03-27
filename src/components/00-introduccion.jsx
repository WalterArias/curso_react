const Saludo2 = () => {
  //logica del componente

  const nombre = "Walo Arias Aguirre caleño cali campeon";
  const nombre2 = "Alen Pro";
  const estado = false;
  //render del componente

  return <>{estado ? nombre : nombre2}</>;
};

export default Saludo2;
