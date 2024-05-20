import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import user from "./../../assets/images/userFallback.jpg";
import bg from "./../../assets/images/bg.jpg";

const Profile = () => {
    const auth = useSelector(state=>state.auth)
  return (
    <Box sx={{
      backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.8)), url(${bg})`,
      backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }}>

    <Box
      sx={{
        maxWidth: {
            md:"1200px",
        },
        margin: "0 auto",
        padding:{
            lg: "10vw 0",
            md: "2vw 1.5vw",
            xs:"3vw"
        },
        display:"flex",
        flexDirection:{
          xs:"column"
        }
      }}
    >
      <Box
        sx={{
          width: "10vw",
          height: "10vw",
          borderRadius: "1vw",
          mb:"2vw"
        }}
      >
        <img
          src={user}
          style={{
            aspectRatio: "1/1",
            width: "100%",
            borderRadius: "50%",
            objectFit: "contain",
          }}
        />
      </Box>
        
      <Box sx={{display:"flex", gap:"1vw", alignItems:"baseline"}}>
        <Typography
          className="manRope800"
          sx={{
            fontSize: "2.5vw",
            color: "white",
          }}
        >
         Name: 
        </Typography>
        <Typography
          className="manRope500"
          sx={{
            fontSize: "2vw",
            color: "white",
          }}
        >
          {auth?.user?.username}
        </Typography>
       
      </Box>
      <Box sx={{display:"flex", gap:"1vw", alignItems:"baseline"}}>
        <Typography
          className="manRope800"
          sx={{
            fontSize: "2.5vw",
            color: "white",
          }}
        >
         Email: 
        </Typography>
        <Typography
          className="manRope500"
          sx={{
            fontSize: "2vw",
            color: "white",
          }}
        >
          {auth?.user?.email}
        </Typography>
       
      </Box>
      
    </Box>
    </Box>

  );
};

export default Profile;
