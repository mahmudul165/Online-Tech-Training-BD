import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBook } from "@fortawesome/free-solid-svg-icons";
import useCourse from "../Hooks/useCourse";
import { Link } from "react-router-dom";
const Instructor = () => {
  const element = <FontAwesomeIcon icon={faClock} />;
  const book = <FontAwesomeIcon icon={faBook} />;
  const [courses, setCourse] = useCourse();
  return (
    <Container className="my-5">
      <h1 className="about-title">All Course Trainer</h1>
      <Row xs={1} md={2} className="g-4 gy-4">
        {courses.map((course) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={course.instructor_img} />
              <Card.Body>
                <Card.Text>{course.expertice}</Card.Text>
                <Row>
                  <Col>
                    <small>
                      {element}
                      {course.phone}
                    </small>
                  </Col>
                  <Col>
                    <small>
                      {book}
                      {course.email}
                    </small>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <Button>Details</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* new design */}
    </Container>
  );
};

export default Instructor;
