// src/App.jsx
import './App.css';
import Button from './components/button/Button';
import PartnersList from './components/partners/PartnersList';
import CompaniesList from './components/companies/CompaniesList';

function App() {

  return (
    <div className="App">
      <h1>Remote Application</h1>
      <Button />
      <PartnersList />
      <CompaniesList />
    </div>
  );
}

export default App;