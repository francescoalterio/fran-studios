import React from "react";
import Link from "next/link";

function PrimaryBtnLink({ title, bgColor, borderRadius, to }) {
  return (
    <>
      <Link href={to || "/"}>
        <a>{title}</a>
      </Link>
      <style jsx>{`
        a {
          background-color: ${bgColor};
          border-radius: ${borderRadius}px;
          padding: 8px 21px;
          font-size: 14px;
          color: #ffffff;
        }
      `}</style>
    </>
  );
}

export default PrimaryBtnLink;
