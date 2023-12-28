import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { CButton, CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

function Perusahaan() {
  const [data_perusahaan, setDataPerusahaan] = useState([]);
  const [show, setShow] = useState(false);
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8081",
    withCredentials: true, // Sertakan opsi withCredentials
  });

  const GetDataPerusahaan = async () => {
    try {
      const response = await axios.get("http://localhost:8081/perusahaan");
      setDataPerusahaan(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetDataPerusahaan();
  }, []);

  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

  const UpdateDataPerusahaan = async (event) => {
    event.preventDefault();
    try {
      const putData = await axios.put(`http://localhost:8081/api/update_perusahaan/perusahaan/${id}`, {
        username: username,
        email: email,
        password: password,
        url: url,
      });
      console.log(putData); // Tambahkan log untuk memeriksa respons dari server
      alert(putData.data.messages);
      window.location.reload();
    } catch (error) {
      console.error(error); // Tambahkan log untuk melihat error
      alert("Data Gagal diubah");
    }
  };

  const deleteDataPerusahaan = async (id) => {
    try {
      const confirmDelete = window.confirm("Apakah anda yakin akan menghapus pengguna?");
      if (confirmDelete) {
        const response = await axiosInstance.delete(`/delete_perusahaan/perusahaan/${id}`);
        if (response.status === 200) {
          // Jika penghapusan berhasil, perbarui data perusahaan
          GetDataPerusahaan();
        } else {
          // Tampilkan pesan kesalahan jika penghapusan gagal
          console.error("Error during deletion:", response.data);
          alert("Data Gagal dihapus");
        }
      }
    } catch (error) {
      // Tampilkan pesan kesalahan jika terjadi kesalahan selama penghapusan
      console.error("Error during deletion:", error.message);
      alert("Data Gagal dihapus");
    }
  };

  const showModal = (data) => {
    setId(data.id);
    setUsername(data.username);
    setEmail(data.email);
    setPassword(data.password);
    setUrl(data.url);
    setShow(true);
  };

  const closeModal = () => {
    setId("");
    setUsername("");
    setEmail("");
    setPassword("");
    setUrl("");
    setShow(false);
  };

  return (
    <>
      <style>{`
        .red-button {
          color: #fff;
          background-color: #FF0000;
          border-color: #FF0000;
        }

        .red-button:hover {
          background-color: #FF4500;
          border-color: #FF4500;
        }
      `}</style>

      <div className="body-flex">
        <div className="flex">
          <div className="col-10 p-5 mx-auto">
            <h1 className="py-1 text-center">Data Perusahaan</h1>
            <Modal show={show} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Form Update Data</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={UpdateDataPerusahaan}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" autoFocus onChange={(e) => setUsername(e.target.value)} value={username} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Url Perusahaan</Form.Label>
                    <Form.Control type="text" onChange={(e) => setUrl(e.target.value)} value={url} />
                  </Form.Group>
                  <Button type="submit" color="primary" className="px-4">
                    Update
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Tabel Pengguna</strong>
              </CCardHeader>
              <CCardBody>
                <p className="text-medium-emphasis small">Tabel ini menampilkan seluruh data pengguna platform JobConnect</p>
                <div className="btn-green">
                  <CButton className="btn-green" href="/daftar">
                    Tambah Data
                  </CButton>
                  {/* <CButton className="btn-green" href="/Reg">
                    Tambah Data
                  </CButton> */}
                </div>
                <CTable striped bordered hover className="text-center mx-auto">
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Url Perusahaan</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Tanggal Daftar</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {data_perusahaan &&
                      data_perusahaan.map((perusahaan, index) => (
                        <CTableRow key={index}>
                          <CTableDataCell>{perusahaan.username}</CTableDataCell>
                          <CTableDataCell>{perusahaan.email}</CTableDataCell>
                          <CTableDataCell>{perusahaan.password}</CTableDataCell>
                          <CTableDataCell>{perusahaan.url}</CTableDataCell>
                          <CTableDataCell>{perusahaan.tgl}</CTableDataCell>
                          <CTableDataCell>
                            <CButton className="btn btn-primary text-white me-2" onClick={() => showModal(perusahaan)}>
                              Edit
                            </CButton>
                            <CButton className="red-button" color="danger" onClick={() => deleteDataPerusahaan(perusahaan.id)}>
                              Hapus
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perusahaan;
