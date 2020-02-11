import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, fabFacebookF } from "@fortawesome/free-solid-svg-icons"

const SocialHeader = () => (
    <div className="wrapper">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="is-size-5 has-text-white has-text-weight-bold">
          <p>AGRWAL HOME SHIFTING</p>
        </div>
        <div className="logo">
          <div className="logo-container">
            <div className="image">
              <img src="https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,h_25,w_30/v1581400525/agrwal-shifting/in_mibcsv.png" />
            </div>
            <div className="image">
              <img src="https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,h_25,w_30/v1581400525/agrwal-shifting/fb_cr8b4w.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
)

export default SocialHeader
