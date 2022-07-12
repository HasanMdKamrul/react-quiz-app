import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from "react";


export default function useVideoList() {
  
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
   
    async function fetchVideo(){
      const db = getDatabase();
      const videosRef = ref(db,"videos");
      const videoQuery = query(
        videosRef,
        orderByKey()
      )
  
      
  
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(videoQuery);

        if (snapshot.exists()) {
          setVideos((prevVideo)=> [...prevVideo,...Object.values(snapshot.val())])
        }
  
      } catch (error) {
        console.log(error);
      }
    }

    fetchVideo();

  },[]);

  return{
    loading,
    error,
    videos
  }
}
