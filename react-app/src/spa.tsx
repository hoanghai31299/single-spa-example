import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import App from "./App";

export const lifecycles = singleSpaReact({
  parcelCanUpdate: true,
  React,
  ReactDOMClient,
  loadRootComponent: (opts) => {
    console.log("opts", opts);
    return Promise.resolve(App);
  },
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    console.log({
      err,
      info,
      props,
    });
    return <div>This renders when a catastrophic error occurs</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
