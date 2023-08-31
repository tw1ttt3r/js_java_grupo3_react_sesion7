import './App.css';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Outlet/>
      </header>
    </div>
  );
}

export default App;
