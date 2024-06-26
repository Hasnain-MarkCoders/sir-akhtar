import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import featureCardMan from "./../../assets/images/featureCardMan.png";
import { pxToRem } from "../../utils/utils";
import { Box } from "@mui/material";
const FeatureCard = ({ title = "", heading = "", src = "", iconSrc = "" }) => {
  return (
    <Box
      sx={{
       
        borderRadius:"10px",
        aspectRatio: "1/1",
        background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.7)), url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // borderRadius: pxToRem("10"),
        boxShadow: `0 0 ${pxToRem("60")} ${pxToRem("10")} rgba(0, 0, 0, 0.1)`,
        padding: "0px",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <Box
        sx={{
          margin: "auto",
          flexGrow: "1",
          flexShrink: "1",
          borderRadius:"10px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          maxWidth: {
            xs: "100%",
            sm: "90%",
          },
          // background:"red",
          mb: {
            xs: "20px",
            md: "-50px",
          },
          display: "flex",
          gap: "15px",
          height: "102px",
        }}
      >
        <Box
          sx={{
            flexGrow: "1",
            flexShrink: "1",
            maxWidth: {
              lg: "80px",
              md: "100px",
            },
            background: "#49A760",
            borderRadius: "8px",
            display: {
              sm: "none",
              xs: "none",
            },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={iconSrc} />
        </Box>
        <Box
          sx={{
            minWidth:{
              xs:"90%",
              sm:""
            },
            maxWidth: {
              lg: "100%",
              md: "100%",
              xs: "90%",
            },
            flexGrow: {
              xs:"4",
              md:"2"
            },
            flexShrink: "1",
            ml: { md: "", xs: " auto" },
            mr: { md: "", xs: " auto" },
            background: "white",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <Typography
            className="coveredBy400"
            sx={{ lineHeight: "28px", fontSize: "24px", letterSpacing: "2px" }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              minWidth:"80%",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ width: "100%", height: "2px", background: "#49A760" }}
            ></Box>
            <Typography
              className="manRope600"
              sx={{ color: "#49A760", lineHeight: "28px", fontSize: "16px" }}
            >
              {heading}
            </Typography>
            <Box
              sx={{ width: "100%", height: "2px", background: "#49A760" }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureCard;
