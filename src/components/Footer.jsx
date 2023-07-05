import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-12 pb-3 bg-[#292929] text-white ">
      <section className="footer-section flex justify-between pt-6 pb-6 pl-9 pr-9">
        <div className="shop-footer flex flex-col gap-y-4">
          <h1 className="text-xl ">Quick Links</h1>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
        <div className="help flex flex-col gap-y-4">
          <h1 className="text-xl">Help</h1>
          <a href="#">Contact us</a>
          <a href="#">FAQ's</a>
        </div>
        <div className="about-us flex flex-col gap-y-4">
          <h1 className="text-xl">About us</h1>
          <a href="#">Our Story</a>
        </div>
        <div className="newsletter flex flex-col gap-y-4">
          <h1 className="text-xl">Sign up for newsletter</h1>
          <div className="news-letter-box flex gap-x-3">
            <input
              type="email"
              className="pl-2"
              placeholder="Enter your email"
            />
            <div className="subscribe-button">
              <button className="pt-2 pb-2 pl-4 pr-4 border border-solid border-[white]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className="mb-3 h-[1px] bg-white w-[96%] m-auto" />
      <div className="copyright-and-links flex justify-between pl-9 pr-9 font-bold">
        <div className="copyright">
          <p>Copyright &copy; Rabi Giri || 2023</p>
        </div>
        <div className="links flex gap-x-2 text-xl">
          <div className="facebook">
            <a href="www.facebook.com" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="instagram">
            <a href="www.instagram.com " target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="twitter">
            <a href="www.twitter.com" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
