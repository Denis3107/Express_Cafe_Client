import axios from "axios";

const GetProducts = ({category,sortBy}) => {
    const {type, order} = {...sortBy}
    return axios.get(`http://localhost:3001/products?category=${category}&sort=${type}&order=${order}`)
}

export default GetProducts