import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import thunk from 'redux-thunk';

const Loading = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: '90vh' }}>
      {!loaded ? (
        <img
          src="src/img/logo.png" // Sesuaikan path gambar dengan struktur folder proyek Anda
          alt="Loading..."
          style={{ width: '400px', height: '400px' }}
        />
      ) : null}
    </div>
  );
};

export default Loading;
