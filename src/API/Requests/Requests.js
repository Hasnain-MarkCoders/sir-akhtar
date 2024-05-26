
import axios from 'axios';
export const host = "http://localhost:5000/api/"
// export const host = "https://6z229h00-5000.inc1.devtunnels.ms/api/"
export const youtubeURl = "https://www.googleapis.com/youtube/v3/"
export const channelId = "UCMGXLIjKaoYdEK96s3qk_sw"
export const apiKey = 'AIzaSyAbBDD2WRQ_dAVqTpgFZL6SYn7J80lqCiY';


export const Post = async (url,data) => {
  try {
    const response = await axios.post(host+url, data);
    return response.data

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    return error?.response?.data || error?.message
  }
};
export const Get = async (url,token) => {
    try {
      const response = await axios.post(host+url, token);
      return response.data
  
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      return error?.response?.data || error?.message
    }
  };

  export const youtubeGetPlaylists = async () => {
    try {
      const playlistsResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlists`,
        {
          params: {
            part:"snippet,contentDetails,status, id, localizations, player",
            channelId: channelId,
            maxResults: 50,
            key: apiKey,
          },
        }
      );
  
      const playlists = playlistsResponse?.data?.items;
      return playlists;
    } catch (error) {
      console.error('Error fetching playlists:', error);
      return []; // Return an empty array or handle the error as needed
    }
  };




  export const youtubeGetAllvideosOfaPlaylist = async(playlistId)=>{
    try{
      const playlistResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems`,
        {
          params: {
            part: 'snippet',
            playlistId: playlistId,
            maxResults: 50, // Adjust this as needed
            key: apiKey,
          },
        }
      );
  
      const videos = playlistResponse.data.items;
     const data= videos.map((video) => {
        const videoId = video.snippet.resourceId.videoId;
        const maxresThumbnail = video.snippet.thumbnails?.maxres?.url || 'No maxres thumbnail available';
        return {videoId, maxresThumbnail}
      });
      return data
    }catch(error){
      console.log(error)
    }
     
  }


  const fetchPlaylists = async () => {
    const url = `https://www.googleapis.com/youtube/v3/playlists`;
    
    try {
      const response = await axios.get(url, {
        params: {
          part: 'snippet,contentDetails',
          channelId: channelId,
          maxResults: 50, // Max number of playlists to fetch (50 is the maximum allowed by the API)
          key: apiKey
        }
      });
      
      const playlists = response.data.items;
      console.log('Playlists:', playlists);
    } catch (error) {
      console.error('Error fetching playlists:', error.response ? error.response.data : error.message);
    }
  };
  
  fetchPlaylists()