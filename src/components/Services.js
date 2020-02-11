import React from "react"

const Services = () => (
  <div className="section" style={{ backgroundColor: "#f0f0f0" }} id="services">
    <div className="container">
      <p className="title has-text-grey-darker">OUR SERVICES</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {ServiceItems.map(items => (
          <div className="box" style={{ width: "300px", margin: "30px" }}>
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={items.picture} alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{items.name}</strong>
                    <br />
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Services

const ServiceItems = [
  {
    picture: "https://via.placeholder.com/130x130",
    name: "STORAGE & WAREHOUSING",
  },
  {
    picture: "https://via.placeholder.com/130x130",
    name: "LOGISTIC SERVICES",
  },
  {
    picture: "https://via.placeholder.com/130x130",
    name: "HOUSEHOLD SHIFTING SERVICES",
  },
  {
    picture: "https://via.placeholder.com/130x130",
    name: "DOOR TO DOOR DELIVERY",
  },
  {
    picture: "https://via.placeholder.com/130x130",
    name: "CAR TRANSPORTATION SERVICES",
  },
  {
    picture: "https://via.placeholder.com/130x130",
    name: "CORPORATE RELOCATION",
  },
]
