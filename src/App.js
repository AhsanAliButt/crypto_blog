import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Assignment1 from './Assignment1.js';
import { Header } from './components/header/Header.js';

const App = () => {
  return (
    <div className="App">
      <Assignment1 />
      <Header blogname="Crypto Mythologies" />
    </div>
  );
}

export default App;
