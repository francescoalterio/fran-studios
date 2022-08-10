import React from "react";
import Link from "next/link";

function LogoLink() {
  return (
    <>
      <Link href="/">
        <a>FRAN STUDIOS</a>
      </Link>
      <style jsx>{`
        a {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default LogoLink;
