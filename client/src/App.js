import './App.css';
import arraypic from './pics/arrayimg1.png'; 
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
hi<img src={arraypic} alt="array logo"/>
<Home/>
      </header>
    </div>
  );
}

export default App;
