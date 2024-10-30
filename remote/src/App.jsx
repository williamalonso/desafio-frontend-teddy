import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import PartnersList from './components/partners/PartnersList';

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

        {/* Definindo as rotas */}
        <Routes>
          <Route path="/" element={<PartnersList />} /> {/* Rota principal */}
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;