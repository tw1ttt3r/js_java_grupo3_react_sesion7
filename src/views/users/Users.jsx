import { Outlet } from "react-router";
import { Link } from 'react-router-dom';

function Users() {
  return (<section>
   <input />
   <button>Buscar</button>
    <Outlet />
    <Link to="/">Home</Link>
  </section>)
}

export default Users;