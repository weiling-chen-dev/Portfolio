import axios from "axios";
import React, { useState } from "react";
import { GrSend } from "react-icons/gr";

const EmailForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    message: "",
    email: "",
    subject: "",
  });

  const [emailSent, setEmailSent] = useState({ success: false, error: false });
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/", formValue);
      if (res?.data[0]?.statusCode === 202) {
        setEmailSent({ success: true, error: false });
      } else {
        setEmailSent({ success: false, error: true });
      }
    } catch (error) {
      setEmailSent({ success: false, error: true });
    }
  };
  const onChange = (e) => {
    setFormValue((formValue) => ({
      ...formValue,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form className="form" onSubmit={onSubmit} method="post">
      <div className="form__name_email_subject_textarea">
        <div className="form__name_email_subject">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={onChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            onChange={onChange}
            required
          />
        </div>
        <textarea
          className="textarea"
          id="message"
          name="message"
          rows="10"
          placeholder="Message"
          onChange={onChange}
          required
        ></textarea>
      </div>
      {emailSent.success === emailSent.error ? (
        <button className="form__button" type="submit">
          <GrSend className="icon" />
          <h3>Send</h3>
        </button>
      ) : emailSent.success === true ? (
        <h1 className="form__email-sent-h1">
          We have already received your reply and will get back to you shortly.
        </h1>
      ) : (
        <h1 className="form__email-sent-h1">
          Sorry...Something went run...Please try later
        </h1>
      )}
    </form>
  );
};

export default EmailForm;
