import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import thunk from 'redux-thunk';
import CreateJob from "./Create";

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

function Job() {
  const [data_jobs, setDataJobs] = useState([]);
  const [show, setShow] = useState(false);

  const GetDataJobs = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/lowker');
      setDataJobs(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetDataJobs();
  }, []);

  const [id, setId] = useState("");
  const [logo, setLogo] = useState("");
  const [nama_perusahaan, setNamaPerusahaan] = useState("");
  const [locasi, setLocasi] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [gaji, setGaji] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [syarat, setSyarat] = useState("");
  const [tentang_perusahaan, setTentangPerusahaan] = useState("");

  // const UpdateDataJobs = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const putData = await axios.put(
  //       `http://localhost:8081/uapi/update_lowker/lowker/${id}`,
  //       {
  //         username: username,
  //         email: email,
  //         password: password
  //       }
  //     );
  //     alert(putData.data.messages);
  //     window.location.reload();
  //   } catch (error) {
  //     alert("Data Gagal diubah");
  //   }
  // };

  const deleteDataJobs = async (id) => {
    const confirmDelete = window.confirm("Apakah anda yakin akan menghapus pengguna?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:8081/delete/registrasi/${id}`);
      GetDataJobs();
    }
  }

  const showModal = (data) => {
    setId(data.id);
    setLogo(data.logo);
    setNamaPerusahaan(data.nama_perusahaan);
    setLocasi(data.locasi);
    setDate(data.date);
    setEmail(data.email);
    setGaji(data.gaji);
    setDeskripsi(data.deskripsi);
    setSyarat(data.syarat);
    setTentangPerusahaan(data.tentang_perusahaan);
    setShow(true);
  };

  const closeModal = () => {
    setId("");
    setLogo("");
    setNamaPerusahaan("");
    setLocasi("");
    setDate("");
    setEmail("");
    setGaji("");
    setDeskripsi("");
    setSyarat("");
    setTentangPerusahaan("");
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
              {/* <Form onSubmit={UpdateDataJobs}> */}
              <Form onSubmit="">
                {/* logo belum */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nama Perusahaan</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    // onChange={(e) => setUsername(e.target.value)}
                    // value={username}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    // onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    // onChange={(e) => setPassword(e.target.value)}
                    // value={password}
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
                <CButton className='btn-green' href="/createjobs">Tambah Data</CButton>
              </div>
              <br />
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
                  {data_jobs && data_jobs.map((jobs, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{jobs.username}</CTableDataCell>
                      <CTableDataCell>{jobs.email}</CTableDataCell>
                      <CTableDataCell>{jobs.password}</CTableDataCell>
                      <CTableDataCell>{jobs.tgl}</CTableDataCell>
                      <CTableDataCell>
                        <CButton className='btn btn-primary text-white me-2' onClick={() => showModal(jobs)} >Edit</CButton>
                        <CButton className="red-button" color="danger" onClick={() => deleteDataJobs(jobs.id)}>Hapus</CButton>
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

export default Job;
