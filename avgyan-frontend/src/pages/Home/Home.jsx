import AboutSection from "../../components/home/about-section/Container";
import CourseDisplay from "../../components/home/coures-section/CourseDisplay";
import FooterSection from "../../components/home/footer-section/FooterSection";
import Intro from "../../components/home/Intro/Intro";
import QualitySection from "../../components/home/quality-section/QualitySection";
import ReviewSection from "../../components/home/review-section/Review";

// import React from 'react'
const Home = () => {
  return (
    <div>
      <Intro />
      <QualitySection />
      <AboutSection />
      <CourseDisplay />
      <ReviewSection />
      <FooterSection />
    </div>
  );
};

export default Home;
