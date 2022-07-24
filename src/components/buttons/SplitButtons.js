import React from "react";

function SplitButtons() {
  return (
    <div className="col-lg-6">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Split Buttons with Icon
          </h6>
        </div>
        <div className="card-body">
          <p>
            Works with any button colors, just use the{" "}
            <code>.btn-icon-split</code> className and the markup in the
            examples below. The examples below also use the
            <code>.text-white-50</code> helper className on the icons for
            additional styling, but it is not required.
          </p>
          <button className="btn btn-primary btn-icon-split">
            <span className="icon text-white-50">
              <i className="fas fa-flag"></i>
            </span>
            <span className="text">Split Button Primary</span>
          </button>
          <div className="my-2"></div>
          <button className="btn btn-success btn-icon-split">
            <span className="icon text-white-50">
              <i className="fas fa-check"></i>
            </span>
            <span className="text">Split Button Success</span>
          </button>
          <div className="my-2"></div>
          <button className="btn btn-info btn-icon-split">
            <span className="icon text-white-50">
              <i className="fas fa-info-circle"></i>
            </span>
            <span className="text">Split Button Info</span>
          </button>
          <div className="my-2"></div>
          <button className="btn btn-warning btn-icon-split">
            <span className="icon text-white-50">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
            <span className="text">Split Button Warning</span>
          </button>
          <div className="my-2"></div>
          <button className="btn btn-danger btn-icon-split">
            <span className="icon text-white-50">
              <i className="fas fa-trash"></i>
            </span>
            <span className="text">Split Button Danger</span>
          </button>
          <div className="my-2"></div>
          <button className="btn btn-secondary btn-icon-split">
            <span className="icon text-white-50">
              <i className="fas fa-arrow-right"></i>
            </span>
            <span className="text">Split Button Secondary</span>
          </button>
          <div className="my-2"></div>
          <button className="btn btn-light btn-icon-split">
            <span className="icon text-gray-600">
              <i className="fas fa-arrow-right"></i>
            </span>
            <span className="text">Split Button Light</span>
          </button>
          <div className="mb-4"></div>
          <p>Also works with small and large button classNamees!</p>
          <button className="btn btn-primary btn-icon-split btn-sm">
            <span className="icon text-white-50">
              <i className="fas fa-flag"></i>
            </span>
            <span className="text">Split Button Small</span>
          </button>
          <div className="my-2"></div>
          <button className="btn btn-primary btn-icon-split btn-lg">
            <span className="icon text-white-50">
              <i className="fas fa-flag"></i>
            </span>
            <span className="text">Split Button Large</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SplitButtons;
