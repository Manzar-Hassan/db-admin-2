import React from "react";
import GrowIn from "../../components/animationComponents/GrowIn";
import FadeIn from "../../components/animationComponents/FadeIn";

function Animation() {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>
      <p className="mb-4">
        Bootstrap's default utility classNamees can be found on the official{" "}
        <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
        page. The custom utilities below were created to extend this theme past
        the default utility classNamees built into Bootstrap's framework.
      </p>
      <div className="row">
        <GrowIn />
        <FadeIn />
      </div>
    </div>
  );
}

export default Animation;
