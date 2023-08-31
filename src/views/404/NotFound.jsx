import { Link } from 'react-router-dom';

function NotFound() {
  return (<section>
    <h1>Lo sentimos, la ruta no existe</h1>
    <Link to="/">Home</Link>
  </section>)
}

export default NotFound;