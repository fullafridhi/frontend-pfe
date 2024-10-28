
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import TeacherCard from './TeacherCard';

const TeachersList = () => {
  const teachers = [
    {
      name: 'Michael Smith',
      role: 'Teacher of Evaluation',
      profilePic: 'https://tse1.mm.bing.net/th?id=OIP.kLuVl7_2soHqjgecM56X2AHaLL&pid=Api&P=0&h=220',
      evaluation: 4.5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Teacher of Mathematics',
      profilePic: 'https://tse4.mm.bing.net/th?id=OIP.T6Ea_g7kHwVoE9mRHhjbQwHaJQ&pid=Api&P=0&h=220',
      evaluation: 4.7,
    },
    {
      name: 'Emily Davis',
      role: 'Teacher of Science',
      profilePic: 'https://tse3.mm.bing.net/th?id=OIP.HPXZI7Y6FDljwRD4ZF8BUwHaHa&pid=Api&P=0&h=220',
      evaluation: 4.9,
    },
    {
      name: 'David Wilson',
      role: 'Teacher of Literature',
      profilePic: 'https://tse3.mm.bing.net/th?id=OIP.WpGPK4qHzTgwf2ysSG2vXAHaL2&pid=Api&P=0&h=220',
      evaluation: 4.2,
    },
    {
        name: 'Joshua Perez',
        role: 'Teacher of Evaluation',
        profilePic: 'https://tse4.mm.bing.net/th?id=OIP.M2Cvn1899hukCKZbTphYjgHaHm&pid=Api&P=0&h=220',
        evaluation: 4.5,
      },
      {
        name: 'Jessica Taylor',
        role: 'Teacher of Mathematics',
        profilePic: 'https://tse1.mm.bing.net/th?id=OIP.9HYbuHazDv_KDgZAoyTzywHaLG&pid=Api&P=0&h=220',
        evaluation: 4.7,
      },
      {
        name: 'Elizabeth Thomas',
        role: 'Teacher of Science',
        profilePic: 'https://tse3.mm.bing.net/th?id=OIP.ou8hY5AN1UQXUCAroz0wMQHaJl&pid=Api&P=0&h=220',
        evaluation: 4.9,
      },
      {
        name: 'Robert Wilson',
        role: 'Teacher of Literature',
        profilePic: 'https://tse1.mm.bing.net/th?id=OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH&pid=Api&P=0&h=220',
        evaluation: 4.2,
      },
  ];

  return (
    <Container>
      <Row>
        {teachers.length === 0 ? (
          <Col>
            <p>No teachers available at the moment.</p>
          </Col>
        ) : (
          teachers.map((teacher, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <TeacherCard
                name={teacher.name}
                role={teacher.role}
                profilePic={teacher.profilePic}
                evaluation={teacher.evaluation}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default TeachersList;
