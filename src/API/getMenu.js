import axios from "axios";

const getMenu =  () => {
    return axios.get(`http://localhost:3001/menu`)
}

export default getMenu