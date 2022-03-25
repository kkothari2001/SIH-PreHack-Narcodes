import React from "react";
import { Avatar, Button, ButtonGroup, Paper, Typography} from "@mui/material";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import CountUp from "react-countup";
import "../css/Profile.css";
import profile_img from "../assets/prof.jpg"

const Profile = () => {
    return(
        <div style={{display:'flex',justifyContent: 'center',alignItems:'middle', margin: '1.5em'}}
        >
            <Paper
            elevation={5}
            sx={{padding:'1.5em 0em', borderRadius:'20px', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', minWidth:'30%', position:'relative'}}
            >
                <Avatar 
                    alt="Avatar"
                    src={profile_img}
                    sx={{height: "200px",width:"200px", margin:'20px'}}
                />
                <Typography
                    variant="h3"
                >
                    Kush Kothari
                </Typography>
                <Typography
                    variant="h6"
                    marginBottom="10px"
                >
                    Professional at.... stuff.
                </Typography>
                <p>Total Earning:</p>
                <h1 style={{marginBottom:'10px'}}>
                $<CountUp start separator="," end={500} />
                </h1>
                <ButtonGroup
                    variant="text"
                    sx={{color:'black', marginBottom:"20px"}}
                >
                    <Button sx={{color:'black'}} startIcon={<InsertLinkIcon />} >Website</Button>
                    <Button sx={{color:'black'}} startIcon={<LinkedInIcon />} >LinkedIn</Button>
                    <Button sx={{color:'black'}} startIcon={<TwitterIcon />} >Twitter</Button>
                    <Button sx={{color:'black'}} startIcon={<LibraryBooksIcon />} >VidyaDaan</Button>
                </ButtonGroup>
                <Typography
                    variant="h6"
                    sx={{width: "80%"}}
                >
                    Bio:
                </Typography>
                <Typography
                    variant="p"
                    sx={{width: "80%"}}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Button sx={{margin:'20px'}}>Ask me a doubt!</Button>
                <ArrowBackIcon 
                    sx={{position:"absolute", top:"20px", left:"20px",border:"solid black 2px", borderRadius:"20000px", width:'50px'}}
                />
                <EditIcon 
                    sx={{position:"absolute", top:"20px", right:"20px",border:"solid black 2px", borderRadius:"20000px", width:'50px'}}
                />
            </Paper>
        </div>
    )
}

export default Profile;