import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Menu, MenuItem, Drawer as MuiDrawer, Typography } from "@mui/material";
import { Dropdown as MuiDropDown } from '@mui/base/Dropdown';
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import zIndex from "@mui/material/styles/zIndex";
import inion from "./../../assets/images/onion.png";
import CartItem from "../CartItem/CartItem";
import Login from "../Login/Login";
import Signup from "../SignUp/SignUp";
const AuthDrawer = ({
  open = false,
  handleClose = () => {},
  handleOpen = () => {},
}) => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = React.useState(false) 
  const [toggleAuthForms, setToggleAuthForms] = React.useState(false)
  const auth = useSelector((state) => state.auth);
  const handleDisbledCloseButton =()=>setIsDisabled(prev=>!prev)
  const toggleAuthForm = ()=>setToggleAuthForms(prev=>!prev)
  const DrawerList = (
    <Box
      sx={{
        width: "100vw",
        p: {
          md: "40px 80px",
          sm: "20px",
          xs: "0px",
        },
        position: "relative",
        background: "white",
        height: "100vh",
        boxSizing: "border-box",
        display:"grid",
        placeItems:"center"
      }}
      role="presentation"
    >
     
       {toggleAuthForms?
       <Signup closeAuthForm={handleClose}  toggleAuthForm={toggleAuthForm} cb={handleDisbledCloseButton}/>
        :
        <Login closeAuthForm={handleClose} toggleAuthForm={toggleAuthForm} cb={handleDisbledCloseButton}/>
        }
    </Box>
  );

  return (
    <div>
      <MuiDrawer
        anchor={"right"}
        sx={{ position: "relative" }}
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            width: "fit-content",
            position: "absolute",
            zIndex: "1",
            top: {
              md: "50px",
              xs: "30px",
            },
            right: {
              md: "80px",
              xs: "20px",
            },
            cursor: "pointer",
            fontSize: {
              xs: "20px",
              sm: "30px",
              md: "30px",
            },
          }}
          onClick={handleClose}
        >
          {!isDisabled &&<IoCloseOutline
          
            style={{
              fontSize: "inherit",
              color: "#1F1E17",
            }}
          />}
        </Box>
        
        {DrawerList}
      </MuiDrawer>
    </div>
  );
};

export default AuthDrawer;
