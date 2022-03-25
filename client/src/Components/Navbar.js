import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <h1>TUMBLE</h1>
      </div>
      <div className="search">
        <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            type="text"
            endAdornment={
              <InputAdornment position="end">
                  <SearchIcon />
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div className="login-button">Login | Signup</div>
    </div>
  );
};

export default Navbar;
