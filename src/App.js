import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Assignment1 from './Assignment1.js';
import { NavBar } from './components/navbar/navBar.js'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Assignment1 />
    </div>
  );
}

export default App;
