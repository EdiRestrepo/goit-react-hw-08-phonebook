import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthLoading } from "../redux/auth/selectorauth";
import { login } from "../redux/auth/operationsAuth";
import { Notify } from "notiflix";
// import { clearError, clearFormError, setFormError } from "../redux/auth/slice";
// import { login } from "../redux/auth/operations";
// import { useEffect } from "react";
// import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  // const { formError, error, isLoading } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    if (email.value && password.value) {
      dispatch(login(credentials));
      Notify.success("Congrats You have been logged");
    } else {
      Notify.failure("Verify the provided info and try again.");
    }
    console.log(credentials);
  };

  return (
    <div
      style={{
        // height: "calc(100vh - 50px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          padding: 15,
        }}
      >
        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Email
          <input type="email" name="email" />
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit" style={{ marginTop: 20 }} disabled={isLoading}>
          {isLoading ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Login;
