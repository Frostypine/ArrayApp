//import "./user.css";
import { Route, Routes, Navigate } from "react-router-dom";
import UserLogin from "./UserLogin";
import UserSignUp from "./UserSignUp";
import { useSelector } from "react-redux";
import { selectLocalUserInfo } from "../../state/usersSlice";

function User() {
  const localUserInfo = useSelector(selectLocalUserInfo)
  const loggedIn = localUserInfo.loggedIn

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={!loggedIn ? <UserLogin /> : <Navigate to="/options" />}
        />
        <Route
          path="/sign-up"
          element={!loggedIn ? <UserSignUp /> : <Navigate to="/options" />}
        />
      </Routes>
    </>
  );
}

export default User;
