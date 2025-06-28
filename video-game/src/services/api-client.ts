import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "08f9756bf50243129def30e51315f850",
    }

});