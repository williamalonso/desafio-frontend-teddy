import { Link } from 'react-router-dom';

import Button from "remoteApp/Button";
import PartnersList from "remoteApp/PartnersList";

const Navbar = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>Use os links abaixo para navegar:</p>

      <div style={{ marginTop: '20px' }}>
        <Link to="/">
          <button style={{ padding: '10px 20px' }}>Página Inicial</button>
        </Link>
        <Link to="/partners">
          <button style={{ padding: '10px 20px', marginLeft: '10px' }}>
            Ver Lista de Parceiros
          </button>
        </Link>
      </div>
      
    </div>
  );
}
 
export default Navbar;