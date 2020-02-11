import React, { Component } from "react"
import { Link } from "gatsby"

export default class MobileMenuBar extends Component {
  state = {
    showDropdown: false,
  }
  openDropwdown = () => {
    this.setState({
      showDropdown: !this.state.showDropdown,
    })
  }
  closeDropdown = () => {
    this.setState({
      showDropdown: false,
    })
  }
  render() {
    const { showDropdown } = this.state
    return (
      <>
        <div className="mobile-navbar">
          <div>
            <img
              src="https://res.cloudinary.com/dkksvxoms/image/upload/v1579766516/vtrack-packers/logo1_sxrx9h.png"
              alt="logo-here"
              style={{
                height: "4rem",
                width: "6rem",
              }}
            />
          </div>
          <div>
            <h1
              className="is-size-3 has-text-white"
              onClick={() => this.openDropwdown()}
            >
              &#x2630;
            </h1>
          </div>
        </div>
        {showDropdown ? (
          <div className="mobile-dropdown-container">
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
        ) : (
          ""
        )}
      </>
    )
  }
}
