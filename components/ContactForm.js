import React, { useState } from "react";
import { colors } from "../constants/colors";

function ContactForm() {
  return (
    <>
      <form
        action="https://formsubmit.co/francescoalteriog@gmail.com"
        method="POST"
      >
        <div>
          <input
            className="short-form"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="short-form"
            type="text"
            name="last name"
            placeholder="Last Name"
          />
        </div>
        <input type="email" name="email" placeholder="Email" />
        <textarea name="description" placeholder="Description" />
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
      <style jsx>{`
        form {
          width: 60%;
          display: flex;
          flex-direction: column;
          margintop: 4rem;
          gap: 1rem;
        }
        div {
          display: flex;
          gap: 1rem;
        }

        .short-form {
          flex: 1;
        }

        input {
          height: 3rem;
          background-color: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          padding: 0 1rem;
        }
        textarea {
          height: 10rem;
          background-color: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          resize: none;
          padding: 1rem;
        }

        button {
          background-color: ${colors.LIGHT_ORANGE};
          border-radius: 5px;
          padding: 8px 21px;
          font-size: 14px;
          color: #ffffff;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default ContactForm;
