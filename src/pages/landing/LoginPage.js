import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginMain } from "../../store/actions/authActions";

import useAuth from "../../utils/authFunctions";
import bg from "../../../assets/bg.jpg";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login, loginAdmin } = useAuth();
  const { state } = useLocation();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const inputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  function submit() {
    dispatch(userLoginMain(input));
  }
  useEffect(() => {
    if (auth.success == true && !auth.admin) {
      login().then(() => {
        navigate(state?.path || "/");
      });
    }
    if (auth.success == true && auth.admin == true) {
      loginAdmin().then(() => {
        navigate(state?.path || "/admin");
      });
    }
  }, [auth]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start overflow-y-scroll">
      <div
        className=" h-110 lg:h-140 w-full z-20"
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundPosition: "start",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-4xl font-bold text-white w-full text-center pt-10">
          Bombaawt
        </p>
      </div>
      <div
        style={styles.container}
        className="flex flex-col items-center w-full bg-faded-light"
      >
        <p
          className="text-primary-main"
          style={{ fontSize: 22, fontWeight: "bold" }}
        >
          Welcome Back!
        </p>
        <div className="h-full w-full px-8 space-y-6 pt-12 items-center justify-center md:w-3/5 lg:2/5 lg:self-center">
          <div className="flex flex-col items-start">
            <label>Email</label>
            <input
              type="email"
              autoComplete="email"
              className="h-12 w-full px-4 rounded-lg shadow-lg"
              id="email"
              name="email"
              placeholder="example@email.com"
              onChange={(e) => inputChange(e)}
            ></input>
          </div>
          <div className="flex flex-col items-start">
            <label>Password</label>
            <input
              type="password"
              className="h-12 w-full px-4 rounded-lg shadow-lg mb-2"
              placeholder="Password"
              name="password"
              onChange={(e) => inputChange(e)}
            ></input>

            <div className="flex justify-end w-full">
              <Link to="/password-reset" className="h-12 w-48 text-right">
                Forgot password?
              </Link>
            </div>
            <div className="justify-end flex w-full">
              <button
                onClick={() => submit()}
                className="shadow-xl w-48 text-xl font-semibold mt-6 bg-primary-main text-white"
                style={styles.submit}
              >
                Login
              </button>
            </div>
            <div className="flex justify-center">
              <Link to="/register" className="text-md font-sm">
                Don't have an account?
                <span className="text-lg font-bold underline"> Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
    paddingBottom: 50,
  },
  submit: {
    padding: 5,
    borderRadius: 12,
  },
};

export default Login;
