import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer as MuiDrawer, Typography } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { headerIconsConditionallyRender, tabsArray } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
const Drawer = () => {
  const cb=(id)=>{
    if(id==="unauthenticated"){
     return setOpenAuthForm(true)
    }
    if(id==="authenticated"){
      return navigate("/profile")
    }
    
    if(id==="logout"){
      dispatch(handleSnackAlert({
        open:true,
        severity:"success",
        message:"Logout successfully"
    }))

      dispatch(handleAuth({ user: null, token: null, authenticated: false }))
      if(pathname!=="/"){
        navigate("/")

      }
    
    }
  }
  const auth = useSelector(state=>state.auth)
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box className="manRope400" sx={{ width: 250, mt:"30px" }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {tabsArray.map((x, index) => (
          <ListItem   onClick={()=>{navigate(x.link)}} key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={x.tabName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          minWidth: "",
          padding: "20px",
        }}
      >
        <CiMenuBurger
          style={{
            fontSize: "2rem",
            color: "green",
          }}
        />
      </Button>
      <MuiDrawer
      className="customDrawer"
        sx={{ position: "relative"}}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: "fit-content",
            position: "absolute",
            top: "10px",
            right: "20px",
          }}
          onClick={toggleDrawer(false)}
        >
          <IoCloseOutline style={{
            fontSize:"30px",
            color:"#1F1E17"
          }} />
        </Box>
        {DrawerList}
      <Box sx={{
        position:"absolute",
        bottom:"10px",
        left:"30px"
      }}>
      {
        headerIconsConditionallyRender(auth, false, cb).map((item, index)=><div key={index}>{item.icon}</div>)
      }
       
      </Box>

      </MuiDrawer>
    </div>
  );
};

export default React.memo(Drawer);
