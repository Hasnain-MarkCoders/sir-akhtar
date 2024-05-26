import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import user from "./../../assets/images/userFallback.jpg";
import bg from "./../../assets/images/addVideoBg.avif";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { youtubeGetAllvideosOfaPlaylist } from "../../API/Requests/Requests";

const AddVideo = () => {
    const auth = useSelector(state=>state.auth)
    const [videos, setVideos] = useState([]);
    const playerRef = useRef(null);
    const [videoId, setVideoId] = useState('qhU7XYkE_No');
    const channelId = 'UCCX0xW7dc8ZehP5OMshg_AQ';
    const apiKey = 'AIzaSyDTe6nBg-5HxV0PvYg2HgK3Trd7ohGAuXA';
    const playlistId="UUCX0xW7dc8ZehP5OMshg_AQ"
  
    // useEffect(() => {
    //   const fetchVideos = async () => {
    //     try {
    //       // Fetch the uploads playlist ID
    //       const channelResponse = await axios.get(
    //         `https://www.googleapis.com/youtube/v3/channels`,
    //         {
    //           params: {
    //             part: 'contentDetails',
    //             id: channelId,
    //             key: apiKey,
    //           },
    //         }
    //       );
    //       console.log(channelResponse)
          
    //       const uploadsPlaylistId =
    //         channelResponse?.data?.items[0]?.contentDetails?.relatedPlaylists?.uploads;
  
    //       // Fetch videos from the uploads playlist
    //       const playlistResponse = await axios.get(
    //         `https://www.googleapis.com/youtube/v3/playlistItems`,
    //         {
    //           params: {
    //             part: 'snippet',
    //             playlistId: uploadsPlaylistId,
    //             maxResults: 50, // Adjust this as needed
    //             key: apiKey,
    //           },
    //         }
    //       );
    //       console.log(playlistResponse.data.items)
  
    //       setVideos(playlistResponse.data.items);
    //     } catch (error) {
    //       console.error('Error fetching YouTube data:', error);
    //     }
    //   };
  
    //   fetchVideos();
    // }, [channelId, apiKey]);

    // useEffect(() => {
    //   // Load the Iframe API script
    //   const tag = document.createElement('script');
    //   tag.src = "https://www.youtube.com/iframe_api";
    //   const firstScriptTag = document.getElementsByTagName('script')[0];
    //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    //   // Initialize the player once the API script is loaded
    //   window.onYouTubeIframeAPIReady = () => {
    //     new window.YT.Player(playerRef.current, {
    //       height: '390',
    //       width: '640',
    //       videoId: videoId,
    //       events: {
    //         onReady: onPlayerReady,
    //         onStateChange: onPlayerStateChange,
    //       },
    //     });
    //   };
  
    //   // Optional: handle the player's ready event
    //   const onPlayerReady = (event) => {
    //     console.log('Player is ready');
    //   };
  
    //   // Optional: handle the player's state change event
    //   const onPlayerStateChange = (event) => {
    //     console.log('Player state changed', event.target.videoTitle);
    //   };
    // }, [videoId]);


    // useEffect(()=>{
    //    (async (username) => {
      
    //     const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${username}&key=${apiKey}`);
    //     const data = await response.json();
    //     console.log(data)
    //     if (data.items && data.items.length > 0) {
    //       const channelId = data.items[0].id;
    //       console.log('Channel ID:', channelId);
    //     } else {
    //       console.log('Channel not found');
    //     }
    //     console.log(data)
    //   })("@drakhterraza")
      
    // },[])

    useEffect(()=>{
        (async()=>{
            const res =await youtubeGetAllvideosOfaPlaylist(playlistId)
            console.log(res)
        })()
    },[])

    return (
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.8)), url(${bg})`,
        backgroundPosition: "center center",
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

{/* <textarea
          style={{
            width: "100%", // Inherit width from Box component
            height: "100%", // Inherit height from Box component
            padding: "10px", // Inherit padding from Box component
            borderRadius: "5px", // Inherit borderRadius from Box component
            border: "1px solid white", 
            resize:"none",
            background:"transparent",
            color:"white"

          }}
        /> */}
    <SyntaxHighlighter language="javascript" style={docco} customStyle={{ borderRadius:"20px", padding:"20px"}}>
      {`const { loginService } = require("../userServices/loginService");
const { signUpService } = require("../userServices/signUpService");
const getLoggedInUserService = require("../userServices/getLoggedInUserService");

const authController = {
  async signup(req, res) {
   await signUpService(req, res)
  },

  async login(req, res) {
      await loginService(req, res)
  },
  async getLoggedInUser(req, res){
      await getLoggedInUserService(req, res) 
  },
};
module.exports = authController;
        
        `}
    </SyntaxHighlighter>
        
        
       <div ref={playerRef}></div>;
      </Box>
      </Box>
  
    );
}

export default AddVideo