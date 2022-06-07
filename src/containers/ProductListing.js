import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios'
import {setProducts} from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    // const fetchProducts = () => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => console.log(json))
    //         .catch((err)=>{
    //             console.log("error: ", err)
    //             }
    //         )
    // }

    async function fetchProducts () {
        const response = await axios.get(
            `https://fakestoreapi.com/products`
        ).catch((err) => {
            console.log("check error: ", err)
        })
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    console.log("Product: ", products)
    return (
        <div className="ui grid container" /*style={{marginTop: "auto"}}*/>
            <ProductComponent/>
        </div>
    )
}
export default ProductListing;