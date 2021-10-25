import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
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
