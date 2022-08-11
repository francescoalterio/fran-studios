import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { colors } from "../constants/colors";

function NavLink({ title, to }) {
  const router = useRouter();

  const path = router.asPath.split("/")[1];
  console.log(path);

  const linkColor = !path && title === "Home" ? true : path === to;
  return (
    <>
      <Link href={`/${to}`}>
        <a>{title}</a>
      </Link>
      <style jsx>{`
        a {
          margin: 0 50px;
          border-bottom: ${linkColor
            ? `2px solid ${colors.LIGHT_ORANGE}`
            : undefined};
          padding: 0 1px 4px 1px;
        }
      `}</style>
    </>
  );
}

export default NavLink;
