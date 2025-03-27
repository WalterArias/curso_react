export const RenderCondicional1 = ({ estado }) => {
  const activo = estado;
  return (
    <>
      {activo ? (
        <div class="alert alert-success" role="alert">
          exito !
        </div>
      ) : (
        <div class="alert alert-danger" role="alert">
          error
        </div>
      )}
    </>
  );
};
