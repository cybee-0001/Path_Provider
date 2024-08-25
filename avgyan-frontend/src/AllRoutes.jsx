import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyPlace from "./pages/myPlace/Page";
import TutorialPage from "./pages/Tutorial_Page/Page";
import CoursePage from "./pages/course_Page/Page";
import Authentication from "./pages/auth/Page";
import ArticlePage from "./pages/Article_Page/Page";
import ContactPage from "./pages/Contact_Page/Page";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/my-place" element={<MyPlace />} />
      <Route exact path="/tutorial" element={<TutorialPage />} />
      <Route exact path="/course" element={<CoursePage />} />
      <Route exact path="/auth" element={<Authentication />} />
      <Route exact path="/article" element={<ArticlePage />} />
      <Route exact path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AllRoutes;
