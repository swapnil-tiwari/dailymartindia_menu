import React from "react";
import styles from "./footer.module.css";

import footer_icon from "./footer_icon.png";
function Footer() {
  return (
    <div className={styles.footer_cont}>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <div classNameName={styles.footer_icon}>
            <img src={footer_icon}></img>
          </div> */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Daily Mart India
                </h6>
                <p>
                  Daily Mart India brings you a one-stop solution for all your
                  daily needs under one roof. Through Daily Mart India, our aim
                  is to bring you the best of the products at the best price!
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Indian Lentils
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Indian Snacks
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Ready-To-Eat Products
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Indian Aatta
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i>Daily Mart India | Aeon,
                  7-1 Honmokuhara, Naka Ward, Yokohama Shi, Kanagawa 231-0821
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  dailymartindia@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "orange" }}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="">
            Daily Mart India
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
