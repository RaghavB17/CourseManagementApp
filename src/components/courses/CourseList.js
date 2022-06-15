import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = ({ courses, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Edit Course</th>
        <th>Delete Course</th>
      </tr>
    </thead>
    <tbody>
      {courses.map((course) => {
        return (
          <tr key={course.id}>
            <td>
              <a href={"http://pluralsight.com/courses/" + course.slug}>
                {course.title}
              </a>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
            <td>
              <Link to={"/course/" + course.slug}>
                <button className="btn btn-outline-primary">Edit Course</button>
              </Link>
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(course)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default CourseList;