import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useLocation } from 'react-router-dom';

import thunk from 'redux-thunk';

export default function Header() {
  const location = useLocation();

  return (
    <>
      <style>{`
        .btn-primary {
          color: #fff;
          background-color: #007bff;
          border-color: #007bff;
        }

        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg">
        <div className="container py-3">
          <Link to="/" className="navbar-brand">
          <img src="logo.png" width={80} height={80} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item ${location.pathname === '/job' ? 'active' : ''}`}>
                <Link to="/job" className="nav-link">
                  Cari Lowongan
                </Link>
              </li>
              
              <li className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
                <Link to="/profile/:id" className="nav-link">
                  Profile
                </Link>
              </li>
              
            </ul>
            <Link to="/login" className={`btn btn-primary ${location.pathname === '/login' ? 'active' : ''}`}>
              Masuk
            </Link>
            <Link to="/register" className={`btn btn-primary m-2 ${location.pathname === '/register' ? 'active' : ''}`}>
              Registrasi
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
