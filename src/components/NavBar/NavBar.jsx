import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectorauth";
import { logout } from "../../redux/auth/operationsAuth";
import { useAuth } from "../../hooks";
import { AppBar, Box } from "@mui/material";

const NavBar = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <AppBar position="static">
      <nav
        style={{
          height: 50,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "15px",
            alignItems: "center",
            gap: 15,
          }}
        >
          <h2>
            <NavLink
              to={isLoggedIn ? "/contacts" : "/"}
              style={{ textDecoration: "none", color: "unset" }}
            >
              My Contact App
            </NavLink>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "15px",
            gap: 15,
            alignItems: "center",
          }}
        >
          {isLoggedIn ? (
            <>
              <p>{user.name}</p>
              <h3 onClick={handleLogout} style={{ cursor: "pointer" }}>
                Logout
              </h3>
            </>
          ) : (
            <>
              <h3>
                <NavLink
                  to="/register"
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  Register
                </NavLink>
              </h3>
              <h3>
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  Login
                </NavLink>
              </h3>
            </>
          )}
        </div>
      </nav>
    </AppBar>
  );
};

export default NavBar;
