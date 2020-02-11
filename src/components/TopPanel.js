import React from "react"

const TopPanel = () => (
  <div className="top-panel">
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      {iconList.map(iconDetails => (
        <>
          <div className="column">
            <div className="icon">
              <img src={iconDetails.icon} />
            </div>
            <div className="details">
              <p className="info-title">{iconDetails.title}</p>
              <a href={iconDetails.link} className="hyperlink">
                <p className="information">{iconDetails.details}</p>
              </a>
            </div>
          </div>
        </>
      ))}
      <div className="column"></div>
      <div className="column">
        <img src="https://via.placeholder.com/400x150" />
      </div>
    </div>
  </div>
)

const iconList = [
  {
    icon:
      "https://res.cloudinary.com/dkksvxoms/image/upload/v1581400547/agrwal-shifting/contact_pctazr_n7co13.png",
    title: "Phone Number",
    details: "+91-7894561***",
    link: "",
  },
  {
    icon:
      "https://res.cloudinary.com/dkksvxoms/image/upload/v1581400547/agrwal-shifting/mail_sg6mou_oevlcw.png",
    title: "Email",
    details: "xyz@email.com",
    link: "",
  },
  {
    icon:
      "https://res.cloudinary.com/dkksvxoms/image/upload/v1581400547/agrwal-shifting/world_htj4lp_bi49k6.png",
    title: "Website",
    details: "mywebsite.org",
    link: "/",
  },
]

export default TopPanel
