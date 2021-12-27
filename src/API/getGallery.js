import axios from "axios";

const getGallery =  () => {
    return axios.get(`http://localhost:3001/gallery`)
}

export default getGallery