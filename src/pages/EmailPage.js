import { useState } from "react";
import Modal from "../components/modal";
import { CgHello } from "react-icons/cg";

const EmailPage = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleOpen = () => {
    setShowEmail(true);
  };

  const handleClose = () => {
    setShowEmail(false);
  };

  const handleEmailDataChange = (event) => {
    setEmailData({ ...emailData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
    console.log(emailData);
    handleClose();
  };

  const renderEmailForm = () => {
    if (!showEmail) {
      return undefined;
    }
    return (
      <Modal onClose={handleClose}>
        <div className="email-form-wrapper">
          <form className="email-form" onSubmit={handleSubmit}>
            <div className="email-form-field">
              <label>Name</label>
              <input
                className="email-form-input"
                type="text"
                name="name"
                placeholder="Name"
                value={emailData.name}
                onChange={handleEmailDataChange}
              />
            </div>
            <div className="email-form-field">
              <label>Email</label>
              <input
                className="email-form-input"
                type="text"
                name="email"
                placeholder="Email Address"
                value={emailData.email}
                onChange={handleEmailDataChange}
              />
            </div>
            <div className="email-form-field">
              <label>Subject</label>
              <input
                className="email-form-input"
                type="text"
                name="subject"
                placeholder="Subject"
                value={emailData.subject}
                onChange={handleEmailDataChange}
              />
            </div>
            <div className="email-form-field">
              <label>Email</label>
              <textarea
                className="email-form-input"
                name="message"
                placeholder="Message Me!"
                value={emailData.message}
                onChange={handleEmailDataChange}
                rows="10"
                cols="50"
              />
            </div>
            <button className="email-form-button">Submit</button>
          </form>
        </div>
      </Modal>
    );
  };

  return (
    <div>
      {renderEmailForm()}
      <div className="outer-wrapper">
        <CgHello className="email-icon" />
        <div className="email-description">
          Like what you see, want to collab, or just want to say hi? Shoot me an
          email! I'll do my best to get back to you ASAP!
        </div>
        <button className="email-button" onClick={handleOpen}>
          Email Me!
        </button>
      </div>
    </div>
  );
};

export default EmailPage;
