import React from "react";

function AppCard({ name, preview, icon, app, styles }) {
  return (
    <>
      <a href={app} className="container" style={styles}>
        <div className="imgContainer">
          <img src={preview} className="preview" />
          <div className="iconContainer">
            <img src={icon} className="icon" />
          </div>
        </div>

        <h5>{name}</h5>
      </a>
      <style jsx>
        {`
          .container {
            cursor: pointer;
            transition: 0.2s;
            background: none;
            border: none;
          }

          .imgContainer {
            width: 100%;
            border-radius: 1.5rem;
            position: relative;
            max-width: 300px;
            min-width: 130px;
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
            color: #ffffff;
          }

          .container:hover {
            transform: scale(1.1);
          }

          @media (max-width: 1024px) {
            .imgContainer {
              max-width: 300px;
              min-width: 100px;
            }
          }

          @media (max-width: 900px) {
            .imgContainer {
              max-width: 230px;
            }
          }

          @media (max-width: 768px) {
            .imgContainer {
              max-width: 150px;
            }
            .iconContainer {
              width: 3rem;
              height: 3rem;
              border-radius: 0.5rem;
            }
          }

          @media (max-width: 641px) {
            .imgContainer {
              max-width: 180px;
            }
          }
          @media (max-width: 520px) {
            .imgContainer {
              max-width: 150px;
            }
          }

          @media (max-width: 495px) {
            .imgContainer {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}

export default AppCard;
