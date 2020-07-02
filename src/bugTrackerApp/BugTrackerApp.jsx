import React from "react";
import store from "./store";
import * as createActions from "./actions";

function BugTrackerApp() {
  const unsubscribe = store.subscribe(() => {
    console.log("Store changed", store.getState());
  });

  store.dispatch(createActions.bugAdded("bug1"));

  store.dispatch(createActions.bugResolved(1));

  //unsubscribe();

  store.dispatch(createActions.bugRemoved(1));

  return (
    <div className="App">
      <h1>Learn Redux</h1>
    </div>
  );
}

export default BugTrackerApp;
