import React from "react";
import { Container, Row, Col } from "reactstrap";
// import "material-ui";
// import courseImg01 from "../../assests/images/web-development.png";
// import courseImg02 from "../../assests/images/kids-learning.png";
// import courseImg03 from "../../assests/images/seo.png";
// import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";
import football from "../assets/coach-football-team.jpeg";
//import cricket from "../../assests/images/cricket.jpg";
import 'reactjs-popup/dist/index.css';

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Football Foundation Course",
    imgUrl: football,
    hours: 35,
    rating: 1.7,
    level: "Advanced",
  },
  {
    id: "02",
    title: "Football Beginner",
    imgUrl: football,
    hours: 53,
    rating: 1.7,
    level: "Intermediate",
  },

  {
    id: "03",
    title: "Football- Stratergies",
    imgUrl: football,
    hours: 50,
    rating: 1.7,
    level: "Basic",
  },

  {
    id: "04",
    title: "Football Team Building",
    imgUrl: football,
    hours: 5,
    rating: 1.7,
    level: "Intermediate",
  },
  {
    id: "05",
    title: "Football Team Building",
    imgUrl: football,
    hours: 5,
    rating: 1.7,
    level: "Intermediate",
  },
  {
    id: "06",
    title: "Football- Stratergies",
    imgUrl: football,
    hours: 50,
    rating: 1.7,
    level: "Basic",
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
