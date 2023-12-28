import React, { useState } from 'react';

const Upload = () => {
  const [suratLamaran, setSuratLamaran] = useState(null);
  const [cv, setCv] = useState(null);
  const [ijasah, setIjasah] = useState(null);
  const [berkasTambahan, setBerkasTambahan] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (event, setFile) => {
    const file = event.target.files[0];
    setFile(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('suratLamaran', suratLamaran);
    formData.append('cv', cv);
    formData.append('ijasah', ijasah);
    formData.append('berkasTambahan', berkasTambahan);

    try {
      const response = await fetch('http://localhost:8081/lamaran', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.ok) {
        // Reset formulir setelah pengiriman
        setSuratLamaran(null);
        setCv(null);
        setIjasah(null);
        setBerkasTambahan(null);

        // Menampilkan konfirmasi bahwa berkas sudah terupload
        setUploadMessage('Berkas berhasil diupload!');
      } else {
        console.error('Gagal mengirimkan data lamaran:', response.statusText);
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  return (
    <div className="card p-3 mx-auto mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Form Upload Berkas</h2>
      {uploadMessage && (
        <div className="alert alert-success" role="alert">
          {uploadMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Surat Lamaran Kerja:</label>
          <input type="file" className="form-control" onChange={(e) => handleFileChange(e, setSuratLamaran)} />
        </div>
        <div className="mb-3">
          <label className="form-label">CV:</label>
          <input type="file" className="form-control" onChange={(e) => handleFileChange(e, setCv)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Ijasah:</label>
          <input type="file" className="form-control" onChange={(e) => handleFileChange(e, setIjasah)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Berkas Tambahan:</label>
          <input type="file" className="form-control" onChange={(e) => handleFileChange(e, setBerkasTambahan)} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn style1 w-100 d-block">
            Upload Berkas
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
