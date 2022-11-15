import axios from "axios";

const KEY = "AIzaSyAjEIZw4VKnDjWpkumbkaCCSJuOMOgcn9E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    // to ensure the search outputs only video suggestion
    // and not playlists
    type: "video",
  },
});
