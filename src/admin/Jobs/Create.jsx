import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import thunk from "redux-thunk";

import { CButton, CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

function CreateJob() {
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

      .body-flex::before {
        content: none; /* atau display: none; */
      }

      input[type=text], select, textarea{
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        resize: vertical;
      }
      
      /* Style the label to display next to the inputs */
      label {
        padding: 12px 12px 12px 0;
        display: inline-block;
      }
      
      /* Style the submit button */
      input[type=submit] {
        background-color: #04AA6D;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
      }
      
      /* Floating column for labels: 25% width */
      .col-25 {
        float: left;
        width: 25%;
        margin-top: 6px;
      }
      
      /* Floating column for inputs: 75% width */
      .col-75 {
        float: left;
        width: 75%;
        margin-top: 6px;
      }
      
      /* Clear floats after the columns */
      .row:after {
        content: "";
        display: table;
        clear: both;
      }

      .body-create {
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
      }

      input[type=file]::file-selector-button {
        margin-right: 20px;
        border: none;
        background: #084cdfbb;
        padding: 10px 20px;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        transition: background .2s ease-in-out;
      }
      
      input[type=file]::file-selector-button:hover {
        background: #0d45a5;
      }
    `}</style>

      <div className="container contaniner-create">
        <div className="body-flex body-create">
          <div className="flex">
            <div className="col-10 p-5 mx-auto">
              <h1 className="py-1 text-center">Tambah Jobs</h1>
              <div className="container">
                <Form onSubmit="">
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="logo">Logo</label>
                    </div>
                    <div className="col-75">
                      <input type="file" id="logo" name="logo" accept="image/*" onChange={logo} />
                      {/* Note: 'accept="image/*"' restricts the input to image files */}
                      {/* You can also add 'multiple' attribute if you want to allow multiple file selection */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="nama_perusahaan">Nama Perusahaan</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="nama_perusahaan" name="nama_perusahaan" placeholder="Your Company Name.." onChange={(e) => setNamaPerusahaan(e.target.value)} value={nama_perusahaan} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="locasi">Locasi</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="locasi" name="locasi" placeholder="Your Location.." onChange={(e) => setLocasi(e.target.value)} value={locasi} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="date">Date</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="date" name="date" placeholder="Your Date.." onChange={(e) => setDate(e.target.value)} value={date} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="email" name="email" placeholder="Your Email.." onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="gaji">Gaji</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="gaji" name="gaji" placeholder="Your Salary.." onChange={(e) => setGaji(e.target.value)} value={gaji} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="deskripsi">Deskripsi</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="deskripsi" name="deskripsi" placeholder="Your Description.." onChange={(e) => setDeskripsi(e.target.value)} value={deskripsi} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="syarat">Syarat</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="syarat" name="syarat" placeholder="Your Requirement.." onChange={(e) => setSyarat(e.target.value)} value={syarat} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="tentang_perusahaan">Tentang Perusahaan</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="tentang_perusahaan" name="tentang_perusahaan" placeholder="Your Company.." onChange={(e) => setTentangPerusahaan(e.target.value)} value={tentang_perusahaan} />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    {/* <input type="submit" value="Submit" /> */}
                    <CButton className="btn-green" href="/">
                      Tambah Data
                    </CButton>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateJob;
