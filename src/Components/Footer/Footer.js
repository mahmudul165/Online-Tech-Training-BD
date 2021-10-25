import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      {/* social media uses */}
      <section className="mb-4">
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-google"></i>
        </a>
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-github"></i>
        </a>
      </section>
      {/* email subcription to collect user data */}
      <section className="">
        <form action="">
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            <div className="col-md-5 col-12">
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="form5Example21"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>
      {/*  CONTRACT AND OTHER PAGE LINK */}
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <h5 className="title my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
            quod.
          </h5>
          <p>
            Here you can use rows and columns here to organize your footer
            content.
          </p>

          <MDBCol md="4">
            <h5>Contact us</h5>
            <div>
              <p>Address: Address77 bd St. dhaka</p>
              <p>Phone: 01740170176</p>
              <p>Email: onlinebd@example.com</p>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled">
                <h5 href="#"> About</h5>
              </li>
              <li className="list-unstyled">
                <a href="#">Talk To Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Help</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol md="4">
            <h5 className="title">Links</h5>
            <ol>
              <li className="list-unstyled">
                <a href="#"> Courses</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Instructor</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Quiz & Tests</a>
              </li>
            </ol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href=" "> Mahmudul Hasan </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
