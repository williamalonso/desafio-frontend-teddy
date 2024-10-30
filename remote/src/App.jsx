// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import AppRoutes from './routes/AppRoutes'; // Importando o componente de rotas

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <h1>Remote Application</h1>
        <Button />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>

        {/* Usando o componente de rotas */}
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;