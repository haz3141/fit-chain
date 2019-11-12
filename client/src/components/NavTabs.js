import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        href="#dashboard"
        onClick={() => props.handlePageChange("Dashboard")}
        className={props.currentPage === "Dashboard" ? "nav-link active" : "nav-link"}
      >
        Dashboard
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#profile"
        onClick={() => props.handlePageChange("Profile")}
        className={props.currentPage === "Profile" ? "nav-link active" : "nav-link"}
      >
        Profile
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#blog"
        onClick={() => props.handlePageChange("Blog")}
        className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
      >
        Blog
      </a>
    </li>
  </ul>
    );
}

export { NavTabs };