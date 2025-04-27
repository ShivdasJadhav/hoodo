//pages/Register/Register.jsx

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Url } from "../../assets/data";
function Register() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${Url}/auth/register`, info, { withcredentials: false });

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <Navbar />
      <div className="registerCard">
        <div className="center">
          <h1>Join Us</h1>

          <form>
            <div className="formInput">
              <div className="txt_field">
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  onChange={handleChange}
                  value={info.username}
                  id="username"
                  required
                />
              </div>
              <div className="txt_field">
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                  value={info.email}
                  id="email"
                  required
                />
              </div>
              <div className="txt_field">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                  id="password"
                  value={info.password}
                  required
                />
              </div>
            </div>
            <div className="login_button">
              <button className="button" onClick={handleClick}>
                Register
              </button>
            </div>
            <div className="signup_link">
              <p>
                Already Registered? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
