import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomDropDown = ({data=[], title=""}) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (link) => {
    setAnchorEl(null);
    if(link){
      navigate(link)
    }
  };

  return (
    <Box
      sx={{
        display: "flex"
      }}
    >
      <Button
        className='manRope700'
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: "#878680"
        }}
      >
        {title}
      </Button>
      {
     data.length>0? <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: 'white',
          minWidth:"20vw",
        }
      }}
    >
      {
        data?.map((item, index)=> <MenuItem
        key={index}
        sx={{
          p:"1vw",
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',

          }
        }} onClick={()=>handleClose(item?.link)}>{item?.title}</MenuItem>)
      }
     
   
      
    </Menu>:null
      }

    </Box>
  )
}

export default CustomDropDown;
