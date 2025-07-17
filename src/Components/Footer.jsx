import "../App.css";
const Footer = () => {
  return (
    <>
      <div class="footer-5-column">
        <div class="footer-container">
          <div class="footer-navbar-container">
            <div class="footer-company-details">
              <div class="footer-details-inner">
                <div class="footer-logo">
                  <img
                    className="logo"
                    alt="logo"
                    src="data:image/png;base64,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"
                  />
                </div>
                <div class="footer-content">
                  <h2>Order food & groceries. Discover best restaurants.</h2>
                </div>
                <div class="footer-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-navbar">
              <div class="footer-navbar-col">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <a href="#"> Help & Support </a>
                  </li>
                  <li>
                    <a href="#"> Partner with us </a>
                  </li>
                  <li>
                    <a href="#"> Ride with us </a>
                  </li>
                </ul>
              </div>
              <div class="footer-navbar-col">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="#"> Insight </a>
                  </li>
                  <li>
                    <a href="#"> Analyst </a>
                  </li>
                  <li>
                    <a href="#"> Marketing </a>
                  </li>
                  <li>
                    <a href="#"> Commerce </a>
                  </li>
                </ul>
              </div>
              <div class="footer-navbar-col">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#"> About Us </a>
                  </li>
                  <li>
                    <a href="#"> Corporate </a>
                  </li>
                  <li>
                    <a href="#"> Team </a>
                  </li>
                  <li>
                    <a href="#"> Careers </a>
                  </li>
                </ul>
              </div>
              <div class="footer-navbar-col">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="#"> Terms & Conditions </a>
                  </li>
                  <li>
                    <a href="#"> Cookie Policy </a>
                  </li>
                  <li>
                    <a href="#"> Privacy Policy </a>
                  </li>
                  <li>
                    <a href="#"> Investor Relations </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-copyright">
            <h3>© 2025 Food Fire Limited - All Rights Reserved</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
