import React from "react";

import "./Footer.css";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Docs</h4>
            <ul>
              <li>
                <a href="#">installation</a>
              </li>
              <li>
                <a href="#">Main Concepts</a>
              </li>
              <li>
                <a href="#">Advanced Guides</a>
              </li>
              <li>
                <a href="#">API Reference</a>
              </li>
              <li>
                <a href="#">Hooks</a>
              </li>
              <li>
                <a href="#">Testing</a>
              </li>
              <li>
                <a href="#">Contributing</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>CHANNELS</h4>
            <ul>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Stackover Flow</a>
              </li>
              <li>
                <a href="#">Discussion Forums</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>COMMUNITY</h4>
            <ul>
              <li>
                <a href="#">Code of Conduct</a>
              </li>
              <li>
                <a href="#">Community Resources</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>More</h4>
            <ul>
              <li>
                <a href="#">Tutorial</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Acknowledgements</a>
              </li>
              <li>
                <a href="#">React Native</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;

// <div className="footer-col">
//             <h4>Follow</h4>
//             <ul className="social-links">
//               <li>
//                 <a href="#s">
//                   <i class="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#s">
//                   <i class="fab fa-twitter"></i>
//                 </a>
//                 <a href="#s">
//                   <i class="fab fa-instagram"></i>
//                 </a>
//                 <a href="#s">
//                   <i class="fab fa-linkedin-in"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
