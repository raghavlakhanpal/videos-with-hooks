/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import youtube from "../APIs/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);
  const search = async (value) => {
    const response = await youtube.get("search", { 
        params: { 
            q: value 
        } 
    });
    setVideos(response.data.items);
  };

return [videos,search];
};

export default useVideos;
