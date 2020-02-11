import React, { Component } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default class Enquiry extends Component {
  state = {
    startDate: new Date(),
  }

  handleChange = date => {
    this.setState({
      startDate: date,
    })
  }

  formSubmit = e => {
    e.preventDefault()
    window.alert("Submission successful. Call on 7597****** .")
  }
  render() {
    return (
      <div className="section picture-wrapper" id="enquiry" style={{marginTop: "40px"}} id="enquiry">
        <h1 className="is-size-1 has-text-centered has-text-white-bis has-text-weight-bold">
          Enquiry
        </h1>
        <div className="container">
          <p className="subtitle has-text-centered has-text-white-bis is-size-4">
            Want to make a booking or have a question? Contact Below.
          </p>
          <form>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <label className="label has-text-white">Name</label>
                  <input
                    required
                    className="input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="field">
                  <label className="label has-text-white">Email</label>
                  <input
                    required
                    className="input is-success"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="field">
                  <label className="label has-text-white">Phone Number</label>
                  <input
                    required
                    className="input"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <label className="label has-text-white">
                    Pickup Location
                  </label>
                  <input
                    required
                    className="input"
                    type="text"
                    placeholder="Service From"
                  />
                </div>
                <div className="field">
                  <label className="label has-text-white">
                    Delivery Location
                  </label>
                  <input
                    required
                    className="input is-success"
                    type="text"
                    placeholder="Service To"
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white">Select date</label>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </div>
            <div className="container button-contain">
              <button
                className="appointment-button"
                onClick={e => this.formSubmit(e)}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}