// src/App.jsx
import './App.css';
import PartnersList from './components/partners/PartnersList';
import CompaniesList from './components/companies/CompaniesList';

function App() {

  return (
    <div className="App">
      <h1 style={{ marginBottom: '90px' }}>Remote Application</h1>
      <PartnersList />
      <CompaniesList />
    </div>
  );
}

export default App;