//import "./user.css";
import { Route, Routes, Navigate } from "react-router-dom";
import UserLogin from "./UserLogin";
import UserSignUp from "./UserSignUp";
import Options         from '../../components/Options';
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

<Route
          path="/*"
          element={
            <div className="user">
              {loggedIn ? <Options /> : <Navigate to="/user/login" />}
              <div className="user-menu-vertical-line"></div>
              <Routes>
                
               
              </Routes>
            </div>
          }
        />
      </Routes>
      
    </>
  );
}

export default User;
