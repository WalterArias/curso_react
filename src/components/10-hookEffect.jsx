import { useState, useEffect } from "react";
import axios from "axios";

export const HookEffect = () => {
  const [posts, setPosts] = useState([]); //tener en cuenta inicializar de acuerdo al tipo de estado
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((respuesta) => {
        setPosts(respuesta.data);
      })
      .catch((error) => console.log(error.message));
  }, [posts]);

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
};

/**
 * useEffect: hook que sincroniza un componente con un sistema externo,
 * Se ejecuta cuando cargo el componente
 * Puedo controlar el numero de "cargas" en la configuracion del
 * useEffect
 *
 */
