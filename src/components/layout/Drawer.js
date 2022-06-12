import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../../store/actions/authActions";
import useAuth from "../../utils/authFunctions";

const Drawer = ({ setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authed, admin, logout } = useAuth();
  const authenticated = useSelector((state) => state.auth.authenticated);

  const closeDrawer = () => {
    setOpen(false);
  };
  // useEffect(() => {
  //   document.body.addEventListener("click", closeDrawer);
  //   return function cleanup() {
  //     document.body.removeEventListener("click", closeDrawer);
  //   };
  // }, []);

  function LogoutAll() {
    document.cookie =
      "Refresh_Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logout();
    dispatch(Logout());
    navigate("/");
  }

  return (
    <div
      className=" h-80 w-60 inset-y-0 right-0 top-12 transform flex flex-col fixed rounded-l-xl bg-primary-main"
      //onMouseLeave={(e) => setOpen(false)}
    >
      <div className="flex flex-col p-8 space-y-4">
        <Link
          to="/"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/store"
          className=" text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Shop
        </Link>

        <Link
          to="/faqs"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Faqs
        </Link>
        {authed && admin ? (
          <Link
            to="/admin"
            className="text-xl font-medium"
            onClick={() => setOpen(false)}
          >
            Admin
          </Link>
        ) : authed && !admin ? (
          <Link
            to="/account"
            className="text-2xl font-medium h-8 flex items-center"
            onClick={() => setOpen(false)}
          >
            Account
          </Link>
        ) : undefined}
        {authed ? (
          <React.Fragment>
            <button
              className="text-xl font-medium flex items-center"
              onClick={() => LogoutAll()}
            >
              Logout
            </button>
          </React.Fragment>
        ) : (
          <Link
            to="/login"
            className="text-2xl font-medium h-8 flex items-center"
            onClick={() => setOpen(false)}
          >
            Login/Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Drawer;
