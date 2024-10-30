import { useState } from 'react'
import './App.css'
import Button from './components/button/Button';
import PartnersList from './components/partners/PartnersList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PartnersList />
      <h1>Remote Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;