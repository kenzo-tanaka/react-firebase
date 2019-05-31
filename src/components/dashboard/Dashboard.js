import React, { Component } from "react";
import Notification from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {};
  render() {
    const { projects } = this.props; // @@ grabs the projects object

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />{" "}
            {/* @@ pass projects to ProjectList */}
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

// @@ map our state from store to the props
const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(Dashboard);
