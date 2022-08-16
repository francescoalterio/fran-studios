import React from "react";

function BackgroundGradient({ children }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-image: linear-gradient(#000000, #592c01);
        }
      `}</style>
    </>
  );
}

export default BackgroundGradient;
