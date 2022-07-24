import React from "react";

function CircleButton() {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
      </div>
      <div className="card-body">
        <p>
          Use Font Awesome Icons (included with this theme package) along with
          the circle buttons as shown in the examples below!
        </p>
        {/* <!-- Circle Buttons (Default) --> */}
        <div className="mb-2">
          <code>.btn-circle</code>
        </div>
        <button className="btn btn-primary btn-circle">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button className="btn btn-success btn-circle">
          <i className="fas fa-check"></i>
        </button>
        <button className="btn btn-info btn-circle">
          <i className="fas fa-info-circle"></i>
        </button>
        <button className="btn btn-warning btn-circle">
          <i className="fas fa-exclamation-triangle"></i>
        </button>
        <button className="btn btn-danger btn-circle">
          <i className="fas fa-trash"></i>
        </button>
        {/* <!-- Circle Buttons (Small) --> */}
        <div className="mt-4 mb-2">
          <code>.btn-circle .btn-sm</code>
        </div>
        <button className="btn btn-primary btn-circle btn-sm">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button className="btn btn-success btn-circle btn-sm">
          <i className="fas fa-check"></i>
        </button>
        <button className="btn btn-info btn-circle btn-sm">
          <i className="fas fa-info-circle"></i>
        </button>
        <button className="btn btn-warning btn-circle btn-sm">
          <i className="fas fa-exclamation-triangle"></i>
        </button>
        <button className="btn btn-danger btn-circle btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        {/* <!-- Circle Buttons (Large) --> */}
        <div className="mt-4 mb-2">
          <code>.btn-circle .btn-lg</code>
        </div>
        <button className="btn btn-primary btn-circle btn-lg">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button className="btn btn-success btn-circle btn-lg">
          <i className="fas fa-check"></i>
        </button>
        <button className="btn btn-info btn-circle btn-lg">
          <i className="fas fa-info-circle"></i>
        </button>
        <button className="btn btn-warning btn-circle btn-lg">
          <i className="fas fa-exclamation-triangle"></i>
        </button>
        <button className="btn btn-danger btn-circle btn-lg">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CircleButton;
