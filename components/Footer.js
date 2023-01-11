import React from "react";

export default function Footer() {
  return (
    <div>
      <div
        class="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-4">Our Office</h4>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt me-3"></i>Mile 17, Buea ,Cameroon
              </p>
              <a class="mb-2 text-white" href="">
                <i class="fa fa-phone-alt me-3"></i>+237 671 559 157
              </a>
              <br/>
              <a class="mb-2 text-white" href="mailto:info@dreamz.business" >
                <i class="fa fa-envelope me-3"></i>info@dreamz.business
              </a>
              
              <div class="d-flex pt-2">
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-2"
                  href="https://twitter.com/DreamzNation2"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-2"
                  href="https://www.facebook.com/dreamz.limited4"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-2"
                  href="https://www.instagram.com/dreamznation/"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-2"
                  href="https://www.linkedin.com/in/dreamz-limited-176011254/"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-4">Services</h4>
              <a class="btn btn-link" href="">
                Travels
              </a>
              <a class="btn btn-link" href="">
                Logistics
              </a>
              <a class="btn btn-link" href="">
                Business
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-4">Quick Links</h4>
              <a class="btn btn-link" href="">
                About Us
              </a>
              <a class="btn btn-link" href="">
                Contact Us
              </a>
              <a class="btn btn-link" href="">
                Our Services
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-4">Newsletter</h4>
              <div class="position-relative w-100">
                <input
                  class="form-control bg-white border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid copyright py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a class="border-bottom" href="#">
                Dreamz 2022 {" "}
              </a>{" "}
              All Right Reserved.
            </div>
            {/* <div class="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a class="border-bottom" href="#">
                Mocu
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
