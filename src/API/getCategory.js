import axios from "axios";

const getCategory =  () => {
    return axios.get(`http://localhost:3001/category`).then(response => response.data.items )
}

export default getCategory