import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 19bb572e988c921346dd8b93c2954fe316ff10e661d1dac5c39c8564fd5da608"
  }
});
