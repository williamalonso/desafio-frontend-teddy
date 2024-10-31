import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  
  const navigate = useNavigate();
  const location = useLocation(); // Obter a rota atual

  const handleLogout = () => {
    localStorage.removeItem('user');
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/login');
  };

  const getButtonStyle = (path) => ({
    padding: '10px 20px',
    marginLeft: path === '/' ? '0' : '10px', // Remove margem no primeiro botão
    backgroundColor: location.pathname === path ? '#535bf2' : '#fff', // Fundo diferenciado para a rota ativa
    color: location.pathname === path ? '#fff' : '#000', // Cor do texto
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>Use os links abaixo para navegar:</p>

      <div style={{ marginTop: '20px' }}>
        <Link to="/">
          <button style={getButtonStyle('/')}>Página Inicial</button>
        </Link>
        <Link to="/partners">
          <button style={getButtonStyle('/partners')}>Ver Lista de Parceiros</button>
        </Link>
        <Link to="/companies">
          <button style={getButtonStyle('/companies')}>Ver Lista de Empresas</button>
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