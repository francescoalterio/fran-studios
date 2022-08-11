import React from "react";
import { colors } from "../constants/colors";
import LogoLink from "./LogoLink";
import NavLink from "./NavLink";
import PrimaryBtnLink from "./PrimaryBtnLink";

function Nav() {
  return (
    <>
      <nav>
        <LogoLink />
        <div>
          <NavLink title="Home" to="" />
          <NavLink title="Apps" to="apps" />
          <NavLink title="About us" to="about-us" />

          <PrimaryBtnLink
            title="Contact us"
            bgColor={colors.LIGHT_ORANGE}
            borderRadius={5}
          />
        </div>
      </nav>
      <style jsx>{`
        nav {
          width: 100%;
          height: 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 3rem;
          position: sticky;
          top: 0;
          background-color: #000000;
          z-index: 100;
        }
      `}</style>
    </>
  );
}

export default Nav;
