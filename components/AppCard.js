import React from "react";

function AppCard({ name, preview, icon }) {
  return (
    <>
      <div className="container">
        <div className="imgContainer">
          <img src={preview} className="preview" />
          <div className="iconContainer">
            <img src={icon} className="icon" />
          </div>
        </div>

        <h5>{name}</h5>
      </div>
      <style jsx>
        {`
          .container {
            cursor: pointer;
            transition: 0.2s;
          }

          .imgContainer {
            width: 12rem;
            height: 15rem;
            border-radius: 1.5rem;
            position: relative;
          }

          .preview {
            width: 100%;
            height: 100%;
            border-radius: 1.5rem;
            object-fit: cover;
            object-position: 0 0;
          }

          .iconContainer {
            width: 4rem;
            height: 4rem;
            border-radius: 0.7rem;
            position: absolute;
            bottom: -20px;
            left: -20px;
            box-shadow: 0 0 20px 2px #000000;
          }

          .icon {
            width: 100%;
            border-radius: 0.7rem;
          }

          h5 {
            width: 100%;
            text-align: center;
            margin-top: 2rem;
            font-weight: 700;
          }

          .container:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </>
  );
}

export default AppCard;
