// import React, { useState } from "react";
// import "./Login.css";
// import "font-awesome/css/font-awesome.min.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:8081/api/login", {
//         email: email,
//         password: password,
//       });

//       if (response.data && response.data.code === 200) {
//         const userData = response.data.data;
//         console.log("Login successfully", userData);

//         // Redirect ke halaman /landing
//         navigate("/landing");
//       } else {
//         console.error("Login failed");
//       }
//     } catch (error) {
//       console.error("Error during login:", error.message);
//     }
//   };

//   return (
//     <div className="box-form">
//       <div className="left">
//         <div className="overlay">
//           <h1>Job Connect</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et est sed felis aliquet sollicitudin</p>
//         </div>
//       </div>

//       <div className="right">
//         <h5>Login</h5>
//         <p>
//           <br />
//           <br />
//         </p>
//         <div className="inputs">
//           <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           <br />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>

//         <br />
//         <br />

//         <div className="remember-me--forget-password">
//           <label>
//             <input type="checkbox" name="item" defaultChecked />
//             <span className="text-checkbox">Remember me</span>
//           </label>
//         </div>

//         <br />
//         <button className="landing-button" onClick={handleLogin}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8081/api/login", {
        email: email,
        password: password,
      });

      if (response.data && response.data.code === 200) {
        const userData = response.data.data;
        console.log("Login successfully", userData);

        navigate("/landing");
      } else {
        console.error("Login failed");
        // notifikasi gagal login
        toast.error("Login Gagal, Periksa Kembali !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className="box-form">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      <div className="left">
        <div className="overlay">
          <h1>Job Connect</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et est sed felis aliquet sollicitudin</p>
        </div>
      </div>

      <div className="right">
        <h5>Login</h5>
        <p>
          <br />
          <br />
        </p>
        <div className="inputs">
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <br />
        <br />

        <div className="remember-me--forget-password">
          <label>
            <input type="checkbox" name="item" defaultChecked />
            <span className="text-checkbox">Remember me</span>
          </label>
        </div>

        <br />
        <button className="landing-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
