import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "ce1fb6e7c3a8d77dec122e525aff0db5",
        language:"ko-KR",
    },
});

export default instance;



