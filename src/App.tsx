import CountriesCapital from './components/CountryCapitalGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Job interview React 18 in TypeScript
        </p>
        <p>
          Click on pairs to finish the game
        </p>
        <CountriesCapital data={{ France: 'Paris', Italy: 'Rome', Spain: 'Madrid'}} />
      </header>
    </div>
  );
}

export default App;
