import React from "react";

function Title({ title }) {
  return (
    <>
      <h3>{title}</h3>
      <style jsx>{`
        h3 {
          font-size: 1.5rem;
          color: #ffffff;
        }
      `}</style>
    </>
  );
}

export default Title;
