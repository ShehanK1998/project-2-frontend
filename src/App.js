import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Page</h1>
        <button className='userBtn' onClick={() => navigate('/users')}>User</button>
      </header>
    </div>
  );
}

export default App;
