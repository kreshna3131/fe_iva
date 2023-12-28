import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import thunk from 'redux-thunk';


import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';

function User() {
  const [data_registrasi, setDataRegistrasi] = useState([]);
  const [show, setShow] = useState(false);

  const GetDataRegistrasi = async () => {
    try {
      const response = await axios.get('http://localhost:8081/registrasi');
      setDataRegistrasi(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetDataRegistrasi();
  }, []);

  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const UpdateDataRegistrasi = async (event) => {
    event.preventDefault();
    try {
      const putData = await axios.put(
        `http://localhost:8081/update/registrasi/${id}`,
        {
          username: username,
          email: email,
          password: password
        }
      );
      alert(putData.data.messages);
      window.location.reload();
    } catch (error) {
      alert("Data Gagal diubah");
    }
  };

  const deleteDataRegistrasi = async (id) => {
    const confirmDelete = window.confirm("Apakah anda yakin akan menghapus pengguna?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:8081/delete/registrasi/${id}`);
      GetDataRegistrasi();
    }
  }

  const showModal = (data) => {
    setId(data.id);
    setUsername(data.username);
    setEmail(data.email);
    setPassword(data.password);
    setShow(true);
  };

  const closeModal = () => {
    setId("");
    setUsername("");
    setEmail("");
    setPassword("");
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
      .red-green {
        color: #fff;
        background-color: ##32CD320;
        border-color: #32CD32;
      }

      .red-green:hover {
        background-color: #ADFF2F;
        border-color: #ADFF2F;
      }
    `}</style>

    <div className='body-flex'>
      <div className="flex">
        <div className='col-10 p-5 mx-auto'>
          <h1 className="py-1 text-center">Data Pengguna</h1>
          <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Form Update Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={UpdateDataRegistrasi}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Form.Group>
                <Button type='submit' color="primary" className="px-4">
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
              <p className="text-medium-emphasis small">
                Tabel ini menampilkan seluruh data pengguna platform JobConnect
              </p>
              <div className='btn-green'>
                <CButton className='btn-green' href="/Register">Tambah Data</CButton>
              </div>
              <CTable striped bordered hover className="text-center mx-auto">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tanggal Daftar</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data_registrasi && data_registrasi.map((registrasi, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{registrasi.username}</CTableDataCell>
                      <CTableDataCell>{registrasi.email}</CTableDataCell>
                      <CTableDataCell>{registrasi.password}</CTableDataCell>
                      <CTableDataCell>{registrasi.tgl}</CTableDataCell>
                      <CTableDataCell>
                        <CButton className='btn btn-primary text-white me-2' onClick={() => showModal(registrasi)} >Edit</CButton>
                        <CButton className="red-button" color="danger" onClick={() => deleteDataRegistrasi(registrasi.id)}>Hapus</CButton>
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

export default User;
