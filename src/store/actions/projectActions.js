export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore(); // @@ Get refrence to out firebase database
    firestore
      .collection("projects") // Connect to collection named 'projects'
      .add({
        ...project, // createProject.jsから受け取ったデータをマップする
        authorFirstName: "Net",
        authorLastName: "Ninja",
        authorId: 12345,
        createdAt: new Date()
      }) // add dumy data to collection
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
