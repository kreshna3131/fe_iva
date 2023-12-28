export default function Footer() {
  return (
    <footer className="bd-footer py-3 py-md-3">
      <div className="container py-3 py-md-4 px-4 px-md-3 text-body-secondary">
        <div className="row justify-content-center">
          <div className="col-3 mb-3">
            <p className="fw-bold">Pencari Kerja</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a>Panduan mencari kerja secara aman</a>
              </li>
              <li className="mb-2">
                <a>Sumber daya karir</a>
              </li>
              <li className="mb-2">
                <a>Bantuan karir</a>
              </li>
              <li className="mb-2">
                <a>Eksporasi Karir</a>
              </li>
              <li className="mb-2">
                <a>Eksporasi Gaji</a>
              </li>
              <li className="mb-2">
                <a>Testimoni</a>
              </li>
              <li className="mb-2">
                <a>Unduh Aplikasi ˅</a>
              </li>
            </ul>
          </div>
          <div className="col-3 mb-3">
            <p className="fw-bold">Perusahaan</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a>Pasang iklan lowongan kerja</a>
              </li>
              <li className="mb-2">
                <a>Talent search</a>
              </li>
              <li className="mb-2">
                <a>Beriklan dengan kami</a>
              </li>
              <li className="mb-2">
                <a>Profil Perusahaan</a>
              </li>
            </ul>
          </div>
          <div className="col-3 mb-3">
            <p className="fw-bold">Tentang JobConnect</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a>Tentang kami</a>
              </li>
              <li className="mb-2">
                <a>Berkarir di JobConnect</a>
              </li>
              <li className="mb-2">
                <a>Mitra internasional ˅ </a>
              </li>
            </ul>
          </div>
          <div className="col-3 mb-3">
            <p className="fw-bold">Kontak</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a>Hubungi kami</a>
              </li>
              <li className="mb-2">
                <a>FAQ</a>
              </li>
              <li className="mb-2">
                <a>Kirim saran</a>
              </li>
              <li className="mb-2">
                <a>Social Media ˅</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <span className="ms-2">Indonesia</span>
          </div>
          <div className="col-6">
            <ul className="list-unstyled d-flex gap-4 justify-content-end">
              <li>
                <a>Pernyataan Privasi</a>
              </li>
              <li>
                <a>Persyaratan & ketentuan</a>
              </li>
              <li>Hak cipta © {new Date().getFullYear()} JobConnect</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
