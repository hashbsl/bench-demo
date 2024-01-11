import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBSpinner,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import "../login/Login.css";
import { postData } from "../api/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [data, setData] = useState({ email : '', password : ''});
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({...data, [name] : value})
  }

  const signIn = async () => {
    const token = localStorage.getItem("token");
    const params = {
      email: data.email,
      password: data.password,
    };
    const res = await postData(
      "http://172.208.34.192:2700/dealerLogin",
      params,
      setLoader
    );
    if (Object.keys(res.data)?.length > 0) {
      toast("Success", {
        type: "success",
        autoClose: 2000,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } else {
      toast("Incorrect email or password", {
        type: "error",
        autoClose: 2000,
      });
    }
    // console.log(`sign in`, res);
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <ToastContainer />
      <MDBValidation className="row g-3">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <MDBValidationItem feedback="Please enter valid email" invalid>
              <MDBInput
                required
                wrapperClass="mb-4"
                label="Email address"
                id="email"
                type="email"
                size="lg"
                name="email"
                value={data.email}
                onChange={onChange}
              />
            </MDBValidationItem>
            <MDBInput
              required
              wrapperClass="mb-4"
              label="Password"
              id="password"
              type="password"
              size="lg"
              name="password"
              value={data.password}
              onChange={onChange}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn
              type="submit"
              className="mb-4 w-100"
              size="lg"
              onClick={() => {
                if (
                  data.email.includes("@") &&
                  data.email !== "" &&
                  data.password !== ""
                ) {
                  signIn();
                }
              }}
            >
              {loader ? <MDBSpinner role="status"></MDBSpinner> : "Sign in"}
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBValidation>
    </MDBContainer>
  );
}

export default Login;
