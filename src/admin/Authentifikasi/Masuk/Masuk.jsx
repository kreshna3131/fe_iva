import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Masuk.css";
import thunk from 'redux-thunk';
import { Link } from "react-router-dom";


const Masuk = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const email = loginNameRef.current.value;
      const password = loginPasswordRef.current.value;

      const response = await axios.post("http://localhost:8080/login_admin", { email, password });

      if (response.data.status === 'success') {
        localStorage.setItem('user_id', response.data.user_id);
        localStorage.setItem('user_name', response.data.user_name);
        localStorage.setItem('user_email', response.data.user_email);

        console.log('Login Successful', response.data);

        window.alert('Welcome!');
        navigate("/profile");
      } else {
        window.alert('Login failed. Email or password is incorrect.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      window.alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="box-form">
      <div className="left">
        {/* Your overlay or content for the left side */}
      </div>

      <div className="right">
        <h5>Masuk</h5>
        <div className="inputs">
          <input
            type="text"
            placeholder="Email"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="remember-me--forget-password">
          <label>
            <input type="checkbox" name="item" defaultChecked />
            <span className="text-checkbox">Remember me</span>
          </label>
        </div>
        <Link to="/home">
          <button className="landing-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Masuk;
