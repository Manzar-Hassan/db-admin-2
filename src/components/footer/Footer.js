import React from "react";

function Footer() {
  return (
    <>
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
          </div>
        </div>
      </footer>
      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#root">
        <i className="fas fa-angle-up"></i>
      </a>
    </>
  );
}

export default Footer;
