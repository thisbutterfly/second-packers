import React from "react"

const Testimonial = () => (
  <div className="section picture-wrapper" id="reviews">
    <div className="container">
      <p className="title has-text-white">CLIENT REVIEWS</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {ReviewItems.map(items => (
          <div className="box" style={{ width: "400px", margin: "30px" }}>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
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

export default Testimonial

const ReviewItems = [
  {
    picture: "https://via.placeholder.com/130x130",
    name: "JOHN SMITH",
  },
  {
    picture: "https://via.placeholder.com/130x130",
    name: "JOHN SMITH",
  },
  {
    picture: "https://via.placeholder.com/130x130",
    name: "JOHN SMITH",
  },
]
