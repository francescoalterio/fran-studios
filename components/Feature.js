import React from "react";

function Feature({ title, description, children }) {
  return (
    <>
      <div>
        {children}
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <style jsx>{`
        div {
          width: 220px;
          height: 220px;
          background-color: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }

        h5 {
          color: #ffffff;
        }

        p {
          font-size: 13px;
          text-align: center;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          div {
            width: 500px
            height: 500px;
          }
        }
      `}</style>
    </>
  );
}

export default Feature;
