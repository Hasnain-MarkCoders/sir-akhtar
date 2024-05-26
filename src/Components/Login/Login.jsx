import React, {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import openEye from "./../../assets/images/eye.png";
import closeEye from "./../../assets/images/closed-eye.png";
import { ValidateEmptyFields, joivalidatePassword } from "../../utils/utils";
import {Login as login} from "./../../API/EndPoints/Endpoints"
import { useDispatch } from "react-redux";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
const Login = ({cb=()=>{}, toggleAuthForm=()=>{}, closeAuthForm=()=>{}}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isOpenEye, setOpenEye] = useState(closeEye);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleEye = () => {
    if (isOpenEye === closeEye) {
      setOpenEye(openEye);
    } else {
      setOpenEye(closeEye);
    }
  };
  
  const handleLogin = async (e) => {

    e.preventDefault();
    setIsLoading(true);
    setDisabled(true)
    cb()
    const isValid = joivalidatePassword(details, setErrors);
    if (isValid) {
      setErrors({});
        const response = await login(details)
        console.log(response)
      if (response?.success) {
            const data = {user: response.user, token:response.token, authenticated:true }
            dispatch(handleAuth(data))
            setIsLoading(false)
            setDisabled(false)
            cb()
            closeAuthForm()
            dispatch(handleSnackAlert( {
              open:true,
              severity:"success",
              message:"Login successfully."
          }))
      } 
      
      else{
        cb()
        setDisabled(false)
        setIsLoading(false);
        dispatch(handleSnackAlert( {
          open:true,
          severity:"error",
          message:"Login Failed."
      }))
      // closeAuthForm()

      }
      
     
    }else{
        cb()
    }
  };

  useEffect(() => {
    ValidateEmptyFields(details, setDisabled);
  }, [details]);

  return (
    <>
      <main>
        <div className="form-container">
          <p className="title">Welcome Back 🎉</p>
          <form className="form">
            <div>
              <input
                onChange={(e) => {
                    setIsLoading(false)
                    setDisabled(false);
                    setDetails((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <p className="error">{errors["email"] ? errors["email"] : ""}</p>
            </div>
            <div>
              <div className="password">
                <input
                  onChange={(e) => {
                    setIsLoading(false)
                    setDisabled(false);
                    setDetails((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                  type={isOpenEye === closeEye ? "password" : "text"}
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <img
                  style={{ display: !details.password ? "none" : "" }}
                  onClick={() => {
                    handleEye();
                  }}
                  width={20}
                  height={20}
                  src={isOpenEye}
                />
              </div>
              <p className="error">
                {errors["password"] ? errors["password"] : ""}
              </p>
            </div>
            <button
              disabled={disabled || isLoading}
              onClick={(e) => {
                handleLogin(e), ValidateEmptyFields(details ,setDisabled);
              }}
              className={disabled || isLoading ? "disabled-button" : "form-btn"}
            >
              Log in
            </button>
          </form>
          <p className="sign-up-label">
            Don't have an account?
              {!isLoading &&<span  onClick={toggleAuthForm} className="sign-up-link">Signup</span>}
          </p>
        </div>
      </main>
    </>
  );
};

export default Login;