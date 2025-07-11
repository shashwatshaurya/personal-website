import React, { useState } from "react";
import Input from "components/Input";
import TextArea from "components/TextArea";
import Button from "components/Button";
import s from "./style.module.scss";
import { EMAIL } from "common/constants";

const EmailForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(`${firstName} ${lastName} - ${subject}`)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      action="#"
      autoComplete="on"
      noValidate={false}
    >
      <div className={s.emailFormWrapper}>
        <div className={s.row}>
          <Input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            autoComplete="given-name"
            name="firstName"
            value={firstName}
            required
          />
          <Input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            autoComplete="family-name"
            name="lastName"
            value={lastName}
            required
          />
        </div>

        <div className={s.row}>
          <Input
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            inputClass={s.subjectBox}
            name="subject"
            value={subject}
            required
          />
        </div>

        <div className={s.row}>
          <TextArea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Body"
            name="message"
            value={message}
            required
          />
          <Button type="submit" large buttonClass={s.btn}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
