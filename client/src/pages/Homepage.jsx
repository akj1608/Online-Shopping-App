import React from "react";
import {Row,Col} from "react-bootstrap";
import products from "../product";
import ProductScreen from "./ProductScreen";



const Homepage = () => {
    return(
        <>
        <Row>
          {products.map((product) => (
            <Col key={product._id} md={4} >
            <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
        </>
    )
}
export default Homepage;