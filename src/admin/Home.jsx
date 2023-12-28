// Import necessary dependencies and components
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearch, fetchJobs } from "../store/actionCreator";
import Loading from "../components/Loading";
import { NavLink, Link } from "react-router-dom";
import icon from "../img/icon.png";
import logo from "../img/logo.png";
import thunk from 'redux-thunk';



const Home = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.job);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchJobs({ limit: 4 })).finally(() => {
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      addSearch({
        companyId: "",
        keyword: "",
      })
    );
  }, [dispatch]);

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
            <Link to="/user">
              <button className="blue-button">Data Pelamar Kerja</button>
            </Link>
            <Link to="/perusahaan">
              <button className="blue-button">Data Perusahaan</button>
            </Link>
            <Link to="/lowongan">
              <button className="blue-button">Data Lowongan Kerja</button>
            </Link>
            <Link to="/lamaran">
              <button className="blue-button">Data Lamaran Kerja</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
