import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-4 p-1">
      <div className="vc_column-inner my-4 pb-3">
        <div className="wpb_wrapper">
          <p>Explore the Wide Range of Options</p>
          <h2>The Best Course Design for you crafted by professionals</h2>

          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the
            great.
          </p>
          {/* <h6>Mahmudul Hasan</h6>
          <p>-Online Tech Course BD</p> */}
        </div>
      </div>

      <Row xs={1} md={2} className="g-6  mt-3">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://elearni.wpengine.com/wp-content/uploads/2019/01/interative-learning.jpg"
            />
            <Card.Body>
              <Card.Title>Interactive Learning</Card.Title>
              <Card.Text>
                Mistaken idea of denouncing pleasure and praising pain was born
                and I will give.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://elearni.wpengine.com/wp-content/uploads/2018/12/exclusive-support.jpg"
            />
            <Card.Body>
              <Card.Title> Exclusive Support </Card.Title>
              <Card.Text>
                Explain to you how all this mistaken idea of denouncing pleasure
                and praising pain was born.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
