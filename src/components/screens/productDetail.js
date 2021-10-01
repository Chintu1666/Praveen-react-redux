import React, { useEffect } from "react";
import Logo from "../../assets/dummy.jpg";
import { connect } from "react-redux";
import { getproduct } from "../redux/Action/products";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProductDetail = ({ product }) => {
  const { id } = useParams();
  const getProducts = async () => {
    await getproduct();
  };
  useEffect(() => {
    if (product.length === 0) {
      getProducts();
    }
  }, [product]);

  const productDetails = product.find((i) => i.id == id) || {};
  return (
    <div>
      <h2 align="center" className="details">
        Product Details
      </h2>

      <div className="card mb-3 product">
        <div className="row no-gutters">
          <div className="col-md-5">
            <img src={Logo} height="400px" width="100%" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{productDetails.name}</h5>
              <p className="card-text">{productDetails.price}</p>
              <p className="card-text">
                <small className="text-muted">
                  {productDetails.description}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getproduct: () => dispatch(getproduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
