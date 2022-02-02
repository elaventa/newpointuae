import React from "react"
import "./Contact.scss"
import { BsTelephone } from "react-icons/bs"
import { MdOutlineAttachEmail } from "react-icons/md"
import swal from "sweetalert"
import { useState } from "react"

const Contact = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  return (
    <div id="contact" className="contact">
      <div className="row">
        <div className="col">
          <div className="one">
            <h1>Get in touch</h1>
            <p className="section-desc">
              {" "}
              We are here to help and answer any questions you might have. We
              look forward to hearing from you.
            </p>
          </div>
          <div className="two">
            <h2>Connect with us</h2>
            <div className="list">
              <li>
                <BsTelephone />
                <a href=""></a>+971 56 1481745
              </li>
              <li>
                <MdOutlineAttachEmail />
                <a href="mailto:sales@newpointuae.com"></a>sales@newpointuae.com
              </li>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="contact-form">
            <form
              action="https://send.pageclip.co/msBW4ufy2j4yuVplIXxvWpAEWD13Gs1b"
              className="pageclip-form"
              method="post"
              onSubmit={() =>
                swal({
                  title: "Thank you for Contacting",
                  text: "We will reach out to you soon!",
                  icon: "success",
                  button: "Close",
                })
              }
            >
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={name}
                onChange={e => setname(e.target.value)}
                required
              />
              <br />
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={email}
                onChange={e => setemail(e.target.value)}
                required
              />
              <br />
              <textarea
                name="message"
                className="form-control"
                placeholder="Message"
                rows="8"
                value={message}
                onChange={e => setmessage(e.target.value)}
                required
              ></textarea>{" "}
              <br />
              <input
                type="submit"
                className="submit button pageclip-form__submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
