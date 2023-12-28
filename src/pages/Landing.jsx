// Import necessary dependencies and components
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearch, fetchJobs } from "../store/actionCreator";
import Loading from "../components/Loading";
import { NavLink } from "react-router-dom";
import icon from "../img/icon.png";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import thunk from 'redux-thunk';

export default function LandingPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.job);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchJobs({ limit: 4 })).finally(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    dispatch(
      addSearch({
        companyId: "",
        keyword: "",
      })
    );
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>

      <div>
        <div className="d-flex justify-content-between p-4 bg-light">
          <img src={icon} alt="icon" style={{ width: "70%" }} />
          <div className="flex-grow-1 p-4 bg-light mx-auto text-center">
            <img src={logo} alt="logo" style={{ width: "100px", height: "100px" }} />
            <h1 className="font-size-24 mb-4">Solusi Tepat Mendapatkan Informasi Lowongan Pekerjaan</h1>
            <p className="font-size-16 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in risus id nunc gravida ultricies. Nullam auctor mauris ut luctus. Fusce semper ligula a metus iaculis, a fermentum dolor luctus.
            </p>
            <NavLink to="/Register" className="btn btn-primary btn-lg">
              Bergabung
            </NavLink>
          </div>
        </div>
      </div>

      
    </>
  );
}
