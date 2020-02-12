import React, { Component } from "react"
import {Link} from "gatsby"

export default class Contact extends Component {
  render() {
    return (
      <div className="section" style={{backgroundColor: "#f0f0f0"}}>
        <div id="contact">
          <h1 className="is-size-1 has-text-centered has-text-weight-bold">
            Get In Touch
          </h1>
          <div className="contact-container">
            <div className="column has-text-weight-bold has-text-grey-darker">
              <p className="header is-size-4">Call us at: </p>
              <span className="subtitle is-size-5 has-text-grey-darker">
                91-9166475912
              </span>
              <p className="header is-size-4">Email us: </p>
              <span className="subtitle is-size-5 has-text-grey-darker">
                lifelinepackersandmovers@gmail.com
              </span>
              <p className="header is-size-4">Address: </p>
              <span className="subtitle is-size-5 has-text-grey-darker">
                address goes here
              </span>
            </div>
            <div className="column">
              <img src="https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,h_200,w_200/v1581480553/agrwal-shifting/contacts_yomqgv.png" />
            </div>
            <div className="column has-text-weight-bold has-text-grey-darker">
              <p className="header is-size-4">Quick Links </p>
              <Link
              to="/"
              className="menu-link-second"
              onClick={() => this.closeDropdown()}
            >
              <div className="item">Home</div>
            </Link>
            <a
              href="#about"
              className="menu-link-second"
              onClick={() => this.closeDropdown()}
            >
              <div className="item">About Company</div>
            </a>
            <a
              href="#services"
              className="menu-link-second"
              onClick={() => this.closeDropdown()}
            >
              <div className="item">Our Services</div>
            </a>
            <a
              href="#enquiry"
              className="menu-link-second"
              onClick={() => this.closeDropdown()}
            >
              <div className="item">Enquiry</div>
            </a>
            <a
              href="#reviews"
              className="menu-link-second"
              onClick={() => this.closeDropdown()}
            >
              <div className="item">Reviews</div>
            </a>
            <a
              href="#contact"
              className="menu-link-second"
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
