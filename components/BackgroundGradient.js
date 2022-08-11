import React from "react";

function BackgroundGradient({ children }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          flex: 1;
          flex-direction: "column";
          background-image: linear-gradient(#000000, #201100);
        }
      `}</style>
    </>
  );
}

export default BackgroundGradient;
