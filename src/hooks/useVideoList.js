import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';
import { useEffect, useState } from "react";


export default function useVideoList(page) {
  
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [videos,setVideos] = useState([]);
  const [hasMore,setHasMore] = useState(true);

  useEffect(()=>{

    async function fetchVideo(){
      const db = getDatabase();
      const videosRef = ref(db,"videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),  //** page from which number of video it will start */
        limitToFirst(8) //** Ekta page a koto gula video thakbe first theke */
      )
  
      
  
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(videoQuery);

       
        
        if (snapshot.exists()) {
          setVideos((prevVideo)=> {
            console.log([...prevVideo]);
            return [...prevVideo,...Object.values(snapshot.val())];
          })
        } else{
          setHasMore(false);
        }
  
      } catch (error) {
        console.log(error);
      }
    }

    fetchVideo();

  },[page]);

  return{
    loading,
    error,
    videos,
    hasMore,
  }
}
