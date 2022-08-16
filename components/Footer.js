import React from "react";

function Footer() {
  return (
    <>
      <footer style={{}}>
        Copyright ® 2022 Fran Studios All rights Recerved
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 70px;
          background-color: #000000;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          color: #ffffff;
        }

        @media (max-width: 600px) {
          footer {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
