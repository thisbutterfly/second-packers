import React from "react"

const MenuBar = () => (
  <div className="menu-bar">
    <div className="wrapper">
      <div className="container">
        <div className="menu-items">
          {Options.map(items => (
            <div className="option">
              <a href={items.link} className="menu-link">
                <p>{items.option}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const Options = [
  {
    option: "HOME",
    link: "/",
  },
  {
    option: "ABOUT COMPANY",
    link: "#about",
  },
  {
    option: "OUR SERVICES",
    link: "#services",
  },
  {
    option: "REVIEWS",
    link: "#reviews",
  },
  {
    option: "ENQUIRY",
    link: "#enquiry",
  },
  {
    option: "CONTACT US",
    link: "#contact",
  },
]

export default MenuBar
