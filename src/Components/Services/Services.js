import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useCourse from "../Hooks/useCourse";
const Services = () => {
  const [courses, setCourse] = useCourse();
  return (
    <Container className="my-5">
      <h1>Courses</h1>
      <Row xs={1} md={3} className="g-4 gy-4">
        {courses.map((course) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={course.course_img} />
              <Card.Body>
                <Card.Title>{course.course_title}</Card.Title>
                <Card.Text>{course.expertice}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* new design */}
    </Container>
  );
};

export default Services;
