import React from "react"
import Icon from "../assests/bus-stop.inline.svg"
import "../css/custom.css"

function contact() {
  return (
    <section id="contact" className="contact-body">
      <h4 className="pt5-l pt0 pt5-m  p10 tc f3 ml3">Contact me</h4>
      <div className="contact__body flex justify-between mt5-l mt2 items-center flex-wrap-m ">
        <Icon style={{ width: "450px", height: "400px", margin: "0 auto" }} />
        <div className="center">
          <h5 className="tc f5">
            For any questions, suggestions, comments or/and invitations write me
          </h5>
          <form
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            data-netlify-recaptcha="true"
            className="form contact-form "
          >
            <label className="label__name">
              <input
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                className="name__input"
              />
            </label>
            <label className="label__email ">
              <input
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                className="email__input  "
              />
            </label>
            <label className="label__subject">
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                id="subject"
                className="subject__input  "
              />
            </label>
            <label>
              <textarea
                placeholder="Message"
                name="message"
                id="message"
                cols="30"
                rows="8"
                className="message__textarea"
              />
            </label>
            <button
              className="pointer submit b--none f5 link dim dib white bg-green pa2"
              type="submit"
            >
              Send
            </button>
            <input
              className="clear pointer clear b--none f5 link dim dib white bg-green pa2"
              type="reset"
              value="Clear"
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default contact
