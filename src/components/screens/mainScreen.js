import React, { useState, useEffect } from "react";
import { Row, Card, Col } from "react-bootstrap";
import Empty from "../../assets/dummy.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getproduct } from "../redux/Action/products";
import { getCategory } from "../redux/Action/category";

function App({ category, product, getCategory, getproduct }) {
  const [categoryData, setCategoryData] = useState(0);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = async () => {
    await getCategory();
  };
  const getProducts = async () => {
    await getproduct();
  };

  return (
    <div className="container App">
      <div align="center" className="product">
        <label className="category">Product Category :</label>

        <select
          className="selectproduct"
          onChange={(e) => setCategoryData(e.target.value)}
        >
          <option value={0}>Select category</option>
          {category.map((i) => {
            return (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            );
          })}
        </select>
      </div>

      <Row xs={1} md={2} className="g-4">
        {product
          .filter((i) =>
            Number(categoryData) === 0
              ? i
              : i.categoryId === Number(categoryData)
          )
          .map((i) => (
            <Col>
              <Card style={{ margin: 10 }}>
                <Link to={`/products/${i.id}`}>
                  <Card.Img variant="top" src={Empty} height="250px" />
                </Link>
                <Card.Body>
                  <Card.Title>{i.name}</Card.Title>
                  <Card.Text>{i.model}</Card.Text>
                  <Card.Text>&#8377;{i.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    category: state.category.category,
    product: state.product.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getproduct: () => dispatch(getproduct()),
    getCategory: () => dispatch(getCategory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
