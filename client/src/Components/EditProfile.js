import { TextField, Paper, Avatar, Typography } from "@mui/material";
import React, { useState } from "react";
import "../css/EditProfile.css";
import "react-toastify/dist/ReactToastify.css";
import profile_img from "../assets/prof.jpg";

const EditProfile = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "middle",
        margin: "1.5em",
      }}>
          <Paper
        elevation={5}
        sx={{
          padding: "1.5em 0em",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "30%",
          position: "relative",
          marginTop: 10
        }}
      >
      <div className="ep-header">Profile & Settings</div>
      <Avatar
          alt="Avatar"
          src={profile_img}
          sx={{ height: "200px", width: "200px", margin: "20px" }}
        />
        <Typography variant="h3">Kush Kothari</Typography>
        <Typography variant="h6" marginBottom="10px">
          Professional at.... stuff.
        </Typography>
      <div>
        <form>
          <div className="ep-form">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <label style={{ marginLeft: 50 }}>First Name</label>
                <br/><br/>
                <TextField
                  id="outlined-required"
                  label="First Name"
                  required
                  variant="outlined"
                  placeholder="First Name"
                  type="text"
                  style={{ marginTop: 10, marginLeft: 50, width: 600, marginBottom: 20 }}
                  // onChange={(e) => setUserFirstName(e)}
                ></TextField>
              </div>
              <div>
                <label style={{ marginLeft: 50 }}>Last Name</label>
                <br/><br/>
                <TextField
                  variant="outlined"
                  id="outlined-required"
                  label="Last Name"
                  required
                  placeholder="Last Name"
                  type="text"
                  style={{ marginTop: 10, marginLeft: 50, width: 600, marginBottom: 20 }}
                  // onChange={(e) => setUserLastName(e)}
                ></TextField>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <label style={{ marginLeft: 50 }}>Email Id</label>
                <br/><br/>
                <TextField
                  required
                  id="outlined-required"
                  label="Email Id"
                  variant="outlined"
                  placeholder="Email Id"
                  type="email"
                  style={{ marginTop: 10, marginLeft: 50, width: 600, marginBottom: 20 }}
                  // onChange={(e) => setUserFirstName(e)}
                ></TextField>
              </div>
              <div>
                <label style={{ marginLeft: 50 }}>Age</label>
                <br/><br/>
                <TextField
                  variant="outlined"
                  id="outlined-required"
                  label="Age"
                  required
                  placeholder="Age"
                  type="number"
                  style={{ marginTop: 10, marginLeft: 50, width: 600, marginBottom: 20 }}
                  // onChange={(e) => setUserLastName(e)}
                ></TextField>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <label style={{ marginLeft: 50 }}>Bio</label>
                <br/><br/>
                <TextField
                  required
                  id="outlined-required"
                  label="Bio"
                  multiline
                  maxRows={7}
                  variant="outlined"
                  placeholder="Enter your Bio here..."
                  type="text"
                  style={{ marginTop: 10, marginLeft: 50, width: 600, marginBottom: 20 }}
                  // onChange={(e) => setUserFirstName(e)}
                ></TextField>
              </div>
              <div>
                <label style={{ marginLeft: 50 }}>Website</label>
                <br/><br/>
                <TextField
                  variant="outlined"
                  placeholder="Website"
                  type="link"
                  style={{ marginTop: 10, marginLeft: 50, width: 600, marginBottom: 20 }}
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
      </Paper>
    </div>
  );
};

export default EditProfile;
