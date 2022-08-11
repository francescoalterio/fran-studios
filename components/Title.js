import React from "react";

function Title({ title }) {
  return (
    <>
      <h3>{title}</h3>
      <style jsx>{`
        h3 {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
}

export default Title;
