import { Link } from 'react-router-dom';

function NavBar(){
    const authToken = localStorage.getItem('token');

    function renderAuthRoutes(){
        <ul>
            <li><Link to="/" exact>Home</Link></li>
            <li><Link to="/login" exact>login</Link></li>
            <li><Link to="/about" exact>About</Link></li>
        </ul>
    }

    function renderRoutes(){
        <ul>
            <li><Link to="posts" exact>posts</Link></li>
            <li><Link to="/logout" exact>Logout</Link></li>
        </ul>
    }
    
    return (
        <div>
            <nav>
                {authToken ? renderRoutes() : renderAuthRoutes()}
            </nav>
        </div>
    )
}

export default NavBar