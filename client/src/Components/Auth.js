import { Grid, TextField, Switch } from "@mui/material";
import React, { useState } from "react";
import "../css/Auth.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setLogin }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const handleLogin = () => {
    console.log(details);
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <br />
      <label>Email</label>
      <form>
        <TextField
          required
          variant="outlined"
          fullWidth
          placeholder="yourname@mail.com"
          type="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
        ></TextField>
        <br />
        <br />
        <label>Password</label>
        <TextField
          variant="outlined"
          fullWidth
          required
          placeholder="enter password"
          type="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
        ></TextField>
        <i>
          <p
            style={{
              color: "#036179",
              textAlign: "right",
              fontSize: "14px",
            }}
          >
            Forgot Password?
          </p>
        </i>
        <br />
        <div
          type="submit"
          className="login-button"
          onClick={() => handleLogin()}
        >
          Login
        </div>
      </form>
      <br />
      <p
        style={{
          textAlign: "center",
          fontSize: "14px",
          cursor: "pointer",
        }}
        onClick={() => setLogin(false)}
      >
        New here? Register
      </p>
    </div>
  );
};

const Register = ({ setLogin }) => {
  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confpassword: "",
    expert: false,
  });

  const handleRegister = () => {
    if (details.password !== details.confpassword) {
      toast.error("Passwords don't match");
    }
    console.log(details);
  };

  return (
    <div className="login">
      <h1>Register</h1>
      <br />

      <label>Name</label>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
          <TextField
            variant="outlined"
            placeholder="First Name"
            fullWidth
            type="text"
            onChange={(e) =>
              setDetails({ ...details, first_name: e.target.value })
            }
          ></TextField>
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Last Name"
            type="text"
            onChange={(e) =>
              setDetails({ ...details, last_name: e.target.value })
            }
          ></TextField>
        </Grid>
      </Grid>

      <br />

      <label>Email</label>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="yourname@mail.com"
        type="email"
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      ></TextField>
      <br />
      <br />
      <label>Password</label>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="enter password"
        type="password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
      ></TextField>
      <br />
      <br />
      <label>Confirm Password</label>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="enter password"
        type="password"
        onChange={(e) =>
          setDetails({ ...details, confpassword: e.target.value })
        }
      ></TextField>
      <br />
      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        <label>Register as an expert</label>
        <Switch
          checked={details.expert}
          onChange={() => setDetails({ ...details, expert: !details.expert })}
        />
      </div>

      <br />
      <div className="login-button" onClick={() => handleRegister()}>
        Register
      </div>
      <br />
      <p
        style={{
          textAlign: "center",
          fontSize: "14px",
          cursor: "pointer",
        }}
        onClick={() => setLogin(true)}
      >
        Have an Account? Log In
      </p>
    </div>
  );
};

const Auth = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="auth-wrapper">
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <div className="auth-image">
            <h1>Welcome!</h1>
            <h2>We're so glad to see you</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          {login ? (
            <Login setLogin={setLogin} />
          ) : (
            <Register setLogin={setLogin} />
          )}
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default Auth;
