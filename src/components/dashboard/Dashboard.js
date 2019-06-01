import React, { Component } from "react";
import Notification from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props; // @@ grabs the projects object
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />{" "}
            {/* @@ pass projects to ProjectList */}
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

// @@ map our state from store to the props
const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects, // @@ ②projects collectionにアクセスする
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects", // @@ Connect with Firebase collection
      orderBy: ["createdAt", "desc"]
    },
    {
      collection: "notifications",
      limit: 3,
      orderBy: ["time", "desc"]
    }
  ])
)(Dashboard);
