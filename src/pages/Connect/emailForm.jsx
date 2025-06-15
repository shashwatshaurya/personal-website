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

  return (
    <form
      action={`mailto:${EMAIL}?body=${message}&subject=${firstName}_${lastName}_${subject}`}
      method="GET"
    >
      <div className={s.emailFormWrapper}>
        <div className={s.row}>
          <Input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            autoComplete="given-name"
            name="firstName"
          />
          <Input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            autoComplete="family-name"
            name="lastName"
          />
        </div>

        <div className={s.row}>
          <Input
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            inputClass={s.subjectBox}
            name="subject"
          />
        </div>

        <div className={s.row}>
          <TextArea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Body"
            name="message"
          />
          <Button type="email" large buttonClass={s.btn}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
