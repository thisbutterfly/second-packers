import React, { Component } from "react"
import {Link} from "gatsby"

export default class Contact extends Component {
  render() {
    return (
      <div className="section">
        <div id="contact" className="container">
          <h1 className="is-size-1 has-text-centered has-text-weight-bold">
            Get In Touch
          </h1>
          <div className="contact-container">
            <div className="contact-wrap column has-text-weight-bold has-text-white-bis">
              <p className="header is-size-4">Call us at: </p>
              <span className="subtitle is-size-5 has-text-white-bis">
                91-9166475912
              </span>
              <p className="header is-size-4">Email us: </p>
              <p className="subtitle is-size-5 has-text-white-bis">
                lifelinepackersandmovers@gmail.com
              </p>
              <p className="header is-size-4">Address: </p>
              <p className="subtitle is-size-5 has-text-white-bis">
                adress goes here
              </p>
            </div>
            <div className="contact-wrap-two column has-text-weight-bold has-text-white-bis">
              <p className="header is-size-4">Quick Links </p>
              <Link
              to="/"
              className="menu-link"
              onClick={() => this.closeDropdown()}
            >
              <div className="item">Home</div>
            </Link>
            <a
              href="#about"
              className="menu-link"
              onClick={() => this.closeDropdown()}
            >
              <div className="item">About Company</div>
            </a>
            <a
              href="#services"
              className="menu-link"
              onClick={() => this.closeDropdown()}
            >
              <div className="item">Our Services</div>
            </a>
            <a
              href="#enquiry"
              className="menu-link"
              onClick={() => this.closeDropdown()}
            >
              <div className="item">Enquiry</div>
            </a>
            <a
              href="#reviews"
              className="menu-link"
              onClick={() => this.closeDropdown()}
            >
              <div className="item">Reviews</div>
            </a>
            <a
              href="#contact"
              className="menu-link"
              onClick={() => this.closeDropdown()}
            >
              <div className="item">Contact Us</div>
            </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
