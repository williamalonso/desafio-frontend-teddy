import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Remover usuário do localStorage e dos cookies
    localStorage.removeItem('user');
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Redirecionar para a página de login
    navigate('/login');
  };

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
        <button 
          onClick={handleLogout} 
          style={{ padding: '10px 20px', marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
        >
          Sair
        </button>
      </div>
      
    </div>
  );
}
 
export default Navbar;