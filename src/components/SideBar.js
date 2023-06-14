import React from "react";
import logo from "../images/logo.png";
import patient from "../images/patient.png";
import view_medical_record from "../../src/images/upload.png";
import medical from "../images/view.png";
import access from "../images/access.png";
import logout from "../images/logout.png";
import "../css/styles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side_bar">
      <img className="logo" src={logo} alt="" />
      <img className="patient_image" src={patient} alt="" />
      <ul>
        <CustomLink to="/dashboard/medicalrecords" className="dashboard_link">
          <img src={view_medical_record} alt="" />
          <p>View Medical Record</p>
        </CustomLink>
        <CustomLink to="/dashboard/medical" className="dashboard_link">
          <img src={medical} alt="" />
          <p>My Records</p>
        </CustomLink>
        <CustomLink to="/dashboard/manageaccess" className="dashboard_link">
          <img src={access} alt="" />
          <p>Manage Access</p>
        </CustomLink>
        <CustomLink to="/" className="dashboard_link">
          <img src={logout} alt="" />
          <p>Logout</p>
        </CustomLink>
      </ul>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default SideBar;
