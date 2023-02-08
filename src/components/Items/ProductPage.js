import { useContext } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CartContext from "../store/cart-context";

const ProductPage = (props) => {
  const ctx = useContext(CartContext)
  console.log(ctx.productDetails)
  const params = useParams();
  const addToCard = (item) => {
    console.log(item)
    const quantity = +1;
    ctx.addToItems({ ...ctx.productDetails, quantity: quantity })
  }
  return (
    <Container className="container my-5">
      <Card className="mt-5 border-0">
        <Row className="row justify-content-center">
          <h1 className="m-5 text-lg-center text-md-start">
            {params.productId}
          </h1>
          <Col lg={6} sm={8} className="text-center"  >
            <Card.Img
              className="img-fluid"
              style={{ width: "400px" }}
              variant="top"
              src={ctx.productDetails.imageUrl}
            />
          </Col>
          <Col lg={4} sm={8}>
            <Card.Text md="4" lg="6">
              <h2>{ctx.productDetails.title}</h2>
            </Card.Text>
            <Card.Text md="4" lg="6">
              <h4>{ctx.productDetails.price}</h4>
            </Card.Text>
            <Button type="click" onClick={()=>addToCard(ctx.productDetails)}>Add to Card</Button>
          </Col>
        </Row>
      </Card>
      <div className="bg-light m-5 p-5">
        <div className="text-center">
          <h2 className = "mb-5">Customer Review</h2>
        </div>
      <Row >
        <Col lg={4} sm={8}>
          <Card className="text-center border-0">
            <Card.Title className="mt-3"> Mohammed </Card.Title>
            <Card.Body> This is so far best product</Card.Body>
          </Card>
        </Col>
        <Col lg={4} sm={8}>
          <Card className="text-center border-0">
            <Card.Title className="mt-3"> Ahmed </Card.Title>
            <Card.Body> I'll rate this product a 5 Star</Card.Body>
          </Card>
        </Col>
        <Col lg={4} sm={8}>
          <Card className="text-center border-0">
            <Card.Title className="mt-3"> Abdul </Card.Title>
            <Card.Body> Great product </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
    </Container>
  );
};
export default ProductPage;
