import { Grid, TextField, Switch } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import "../css/EditProfile.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios, { Routes } from "../services/index.js";

const EditProfile = () => {
  return (
    <div>
      <div className="ep-header">Profile & Settings</div>
      <div>
        <form>
          <div className="ep-form">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <label style={{ marginLeft: 50 }}>First Name</label>
                <TextField
                  id="outlined-required"
                  label="First Name"
                  required
                  variant="outlined"
                  placeholder="First Name"
                  type="text"
                  style={{ marginTop: 10, marginLeft: 50, width: 750, marginBottom: 20 }}
                  // onChange={(e) => setUserFirstName(e)}
                ></TextField>
              </div>
              <div>
                <label style={{ marginLeft: 50 }}>Last Name</label>
                <TextField
                  variant="outlined"
                  id="outlined-required"
                  label="Last Name"
                  required
                  placeholder="Last Name"
                  type="text"
                  style={{ marginTop: 10, marginLeft: 50, width: 750, marginBottom: 20 }}
                  // onChange={(e) => setUserLastName(e)}
                ></TextField>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <label style={{ marginLeft: 50 }}>Email Id</label>
                <TextField
                  required
                  id="outlined-required"
                  label="Email Id"
                  variant="outlined"
                  placeholder="Email Id"
                  type="email"
                  style={{ marginTop: 10, marginLeft: 50, width: 750, marginBottom: 20 }}
                  // onChange={(e) => setUserFirstName(e)}
                ></TextField>
              </div>
              <div>
                <label style={{ marginLeft: 50 }}>Age</label>
                <TextField
                  variant="outlined"
                  id="outlined-required"
                  label="Age"
                  required
                  placeholder="Age"
                  type="number"
                  style={{ marginTop: 10, marginLeft: 50, width: 750, marginBottom: 20 }}
                  // onChange={(e) => setUserLastName(e)}
                ></TextField>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <label style={{ marginLeft: 50 }}>Bio</label>
                <TextField
                  required
                  id="outlined-required"
                  label="Bio"
                  multiline
                  maxRows={7}
                  variant="outlined"
                  placeholder="Enter your Bio here..."
                  type="text"
                  style={{ marginTop: 10, marginLeft: 50, width: 750, marginBottom: 20 }}
                  // onChange={(e) => setUserFirstName(e)}
                ></TextField>
              </div>
              <div>
                <label style={{ marginLeft: 50 }}>Website</label>
                <TextField
                  variant="outlined"
                  placeholder="Website"
                  type="link"
                  style={{ marginTop: 10, marginLeft: 50, width: 750, marginBottom: 20 }}
                  // onChange={(e) => setUserLastName(e)}
                ></TextField>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, width: 200, marginLeft: "75%" }}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <div
              type="submit"
              className="ep-form-button"
              style={{ marginLeft: 25}}
              // onClick={() => onSave()}
            >
              Save
            </div>
            <div
              type="reset"
              className="ep-form-button"
              style={{ marginLeft: 25}}
              // onClick={() => onSave()}
            >
              Cancel
            </div>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
