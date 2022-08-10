import React from "react";
import Link from "next/link";

function PrimaryBtnLink({ title, bgColor, borderRadius }) {
  return (
    <>
      <Link href="/">
        <a>{title}</a>
      </Link>
      <style jsx>{`
        a {
          background-color: ${bgColor};
          border-radius: ${borderRadius}px;
          padding: 8px 21px;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}

export default PrimaryBtnLink;
