import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "../login/Login.css";
import { postData } from "./services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const signIn = async () => {
    const params = {
      email: data.email,
      password: data.password,
    };
    const res = await postData(
      "http://172.208.34.192:2700/dealerLogin",
      params
    );
    if (Object.keys(res.data).length > 0) {
      toast("Success", {
        type: "success",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      toast("Incorrect email or password", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <ToastContainer />
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            value={data.email || ""}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            value={data.password || ""}
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
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

          <MDBBtn className="mb-4 w-100" size="lg" onClick={signIn}>
            Sign in
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
