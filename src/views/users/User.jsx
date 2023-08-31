import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import users from "../../data/users";

function User() {

  const { id } = useParams();
  const [ datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    imagen: ""
  });
  const [ error, setError] = useState(false);

  const buscaId = (id) => {
    const resultado = users.filter(us => us.id === id);
    if (resultado.length === 1) {
      setDatosUsuario( prevState => ({ ...prevState, nombre: resultado[0].name, imagen: resultado[0].image }));
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    console.log(id)
    if (!!id) {
      buscaId(Number(id));
    }
  }, [id]);

  return (<section>
    { error && <Navigate to="/users/errorUser" /> }
    <h1> { datosUsuario.nombre } </h1>
    <div>
      <img src={datosUsuario.imagen} alt="imagen" />
    </div>
  </section>)
}

export default User