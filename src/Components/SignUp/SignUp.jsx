import React, {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import openEye from "./../../assets/images/eye.png";
import closeEye from "./../../assets/images/closed-eye.png";
import { ValidateEmptyFields, joiValidateSignUp, joivalidatePassword } from "../../utils/utils";
import { Register } from "../../API/EndPoints/Endpoints";
import { useDispatch } from "react-redux";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
const Signup = ({cb=()=>{}, toggleAuthForm=()=>{}, closeAuthForm=()=>{}}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [details, setDetails] = useState({
    email: "",
    password: "",
    username:""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username:""
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
  
  const handleSignup = async (e) => {

    e.preventDefault();
    setIsLoading(true);
    setDisabled(true)
    cb()
    const isValid = joiValidateSignUp(details, setErrors);
    if (isValid) {
      setErrors({});
        const response = await Register(details)
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
              message:"Sign up successfully."
          }))
      } 
      
      else{
        cb()
        setDisabled(false)
        setIsLoading(false);
        dispatch(handleSnackAlert( {
          open:true,
          severity:"error",
          message:"Sign up Failed."
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
          <p className="title">Welcome 🎉</p>
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
                type="text"
                className="input"
                name="username"
                placeholder="Name"
              />
              <p className="error">{errors["username"] ? errors["username"] : ""}</p>
            </div>
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
                handleSignup(e), ValidateEmptyFields(details ,setDisabled);
              }}
              className={disabled || isLoading ? "disabled-button" : "form-btn"}
            >
              Signup
            </button>
          </form>
          <p className="sign-up-label">
            Already have an account
           { !isLoading && <span onClick={toggleAuthForm} className="sign-up-link">Signin</span>}
          </p>
        </div>
      </main>
    </>
  );
};

export default Signup;