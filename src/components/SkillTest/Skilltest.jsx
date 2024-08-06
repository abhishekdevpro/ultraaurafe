import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const StyledCard = styled(Card)`
  margin-bottom: 20px;
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: #e6f2ff;
  font-weight: bold;
`;

const StyledCardBody = styled(Card.Body)`
  padding: 10px;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SkillTestCard = ({ title, stats }) => (
  <StyledCard>
    <StyledCardHeader>{title}</StyledCardHeader>
    <StyledCardBody>
      {stats.map((stat, index) => (
        <StatItem key={index}>
          <span>{stat.label}:</span>
          <span>{stat.value}</span>
        </StatItem>
      ))}
      <Button variant="primary" size="sm" className="mt-2">Take Test</Button>
    </StyledCardBody>
  </StyledCard>
);

const SkillTestGrid = () => {
  const skillTests = [
    {
      title: "English grammar",
      stats: [
        { label: "Total Questions", value: 15 },
        { label: "Total Minutes", value: 8 },
        { label: "Passing Score", value: "80%" },
      ]
    },
    {
      title: "Team Leadership",
      stats: [
        { label: "Total Questions", value: 15 },
        { label: "Total Minutes", value: 8 },
        { label: "Passing Score", value: "80%" },
      ]
    },
    // Add more skill tests here...
  ];

  return (
    <Container>
      <Row>
        {skillTests.map((test, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <SkillTestCard title={test.title} stats={test.stats} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillTestGrid;