import logo from './logo.svg';
import './App.css';
import Anagrams from './Anagrams';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Anagrams />
      </header>
    </div>
  );
}

export default App;
