import React from 'react';
import { useSelector } from 'react-redux';
import CourseCard from '../components/CourseCard'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CourseList = () => {
  const courses = useSelector((state) => state.courses.courses);

  return (
    <Container>
      <Row>
        {courses.length === 0 ? (
          <Col>
            <p>No courses available at the moment.</p>
          </Col>
        ) : (
          courses.map((course) => (
            <Col xs={12} sm={6} md={4} lg={3} key={course.id}> {/* Adjust sizes for responsiveness */}
              <CourseCard course={course} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default CourseList;
