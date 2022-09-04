import axios from "axios"

const ProductService = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})

export default ProductService