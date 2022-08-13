import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { colors } from "../constants/colors";

function NavLink({ title, to, mobile }) {
  const router = useRouter();

  const path = router.asPath.split("/")[1];

  const linkColor = !path && title === "Home" ? true : path === to;
  return (
    <>
      <Link href={`/${to}`}>
        <a>{title}</a>
      </Link>
      <style jsx>{`
        a {
          margin: 0 ${!mobile ? 50 : 0}px;
          border-bottom: ${mobile
            ? undefined
            : linkColor
            ? `2px solid ${colors.LIGHT_ORANGE}`
            : undefined};
          padding: 0 1px 4px 1px;
          color: #ffffff;
          width: ${mobile ? "100%" : undefined};
          height: ${mobile ? "40px" : undefined};
          background-color: ${mobile && linkColor
            ? colors.LIGHT_ORANGE
            : undefined};
          display: ${mobile ? "flex" : "inline-block"};
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default NavLink;
