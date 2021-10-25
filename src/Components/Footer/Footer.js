import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
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
