import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h2>Course Management Portal</h2>
    <p>
      Here you can use view, add, edit or deleting the course functionality.
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
