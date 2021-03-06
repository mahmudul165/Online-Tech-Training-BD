import React from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBook,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import useCourse from "../Hooks/useCourse";
const SingleService = () => {
  // use of fontawesome icon
  const element = <FontAwesomeIcon icon={faClock} />;
  const book = <FontAwesomeIcon icon={faBook} />;
  const shooping = <FontAwesomeIcon icon={faShoppingCart} />;
  const [courses, setCourse] = useCourse();
  return (
    <Container className="my-5">
      <h1 className="about-title">Courses</h1>
      <Row xs={1} md={2} className="g-4 gy-4">
        {courses.map((course) => {
          // only last four course given my home page
          if (course.index >= 5) {
            return (
              <Col>
                <Card>
                  <Card.Img variant="top" src={course.course_img} />
                  <Card.Body>
                    <Card.Title>{course.course_title}</Card.Title>
                    <span>by: </span>
                    <small>{course.instructor_name}</small>
                    <Card.Text>{course.expertice}</Card.Text>
                    <Row>
                      <Col>
                        <small>
                          {element}
                          {course.duration} Hours
                        </small>
                      </Col>
                      <Col>
                        <small>
                          {book}
                          {course.lecture} Lectures
                        </small>
                      </Col>
                      <Col>
                        <small>{course.price} Taka</small>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <Button>{shooping}Add to Cart</Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
};

export default SingleService;
