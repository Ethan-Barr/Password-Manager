import './App.css';
import PasswordGenerator from './Components/generator';
import Wedget from './Components/Wedget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Password Manager</p>
      </header>

      <div className='PasswordGenerator'>
        <Wedget
        title="Password Generator"
        description="Move slider to change 
        number of charaters">
          <PasswordGenerator/>
        </Wedget>
      </div>
    </div>
  );
}

export default App;
