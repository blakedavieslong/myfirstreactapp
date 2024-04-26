import logo from './logo.svg';
import './App.css';
import TitleBar from './TitleBar';
import SearchPanel from './SearchPanel';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <SearchPanel />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Codecademy!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
