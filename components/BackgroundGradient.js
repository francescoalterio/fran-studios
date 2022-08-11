import React from "react";

function BackgroundGradient({ children }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-image: linear-gradient(#000000, #201100);
        }
      `}</style>
    </>
  );
}

export default BackgroundGradient;
