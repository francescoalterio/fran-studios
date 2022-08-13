import React, { useState, useEffect } from "react";
import { colors } from "../constants/colors";
import LogoLink from "./LogoLink";
import NavLink from "./NavLink";
import PrimaryBtnLink from "./PrimaryBtnLink";
import { IoListSharp, IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/router";

function Nav() {
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);

  const router = useRouter();

  const handleMobileMenuActive = () => {
    const $mobileMenu = document.querySelector(".navLinkMobileContainer");
    $mobileMenu.classList.toggle("navLinkMobileContainerActive");

    if ($mobileMenu.classList.contains("navLinkMobileContainerActive")) {
      setMobileMenuIsActive(true);
    } else {
      setMobileMenuIsActive(false);
    }
  };

  useEffect(() => {
    if (mobileMenuIsActive) {
      handleMobileMenuActive();
    }
  }, [router.asPath]);

  return (
    <>
      <nav>
        <LogoLink />
        <div className="navLinkPCContainer">
          <NavLink title="Home" to="" />
          <NavLink title="Apps" to="apps" />
          <NavLink title="About us" to="about-us" />

          <PrimaryBtnLink
            title="Contact us"
            bgColor={colors.LIGHT_ORANGE}
            borderRadius={5}
          />
        </div>
        <button
          className="navButtonMobileContainer"
          onClick={handleMobileMenuActive}
        >
          {mobileMenuIsActive ? (
            <IoCloseSharp size={30} color="#ffffff" />
          ) : (
            <IoListSharp size={30} color="#ffffff" />
          )}
        </button>
        <div className="navLinkMobileContainer">
          <NavLink title="Home" to="" mobile />
          <NavLink title="Apps" to="apps" mobile />
          <NavLink title="About us" to="about-us" mobile />
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

        .navButtonMobileContainer {
            display: none;
            background-color: #000000;
            border: none;
            width: 2rem;
            height: 2rem;
          }

        .navLinkMobileContainer {
          display: none;
          position: absolute;
          background-color: rgba(0,0,0,0.7);
          width: 100vw;
          transition: .5s;
          top: -200px;

          border-bottom: 2px solid orange;
          z-index: 20;
          left:0
        }

        .navLinkMobileContainerActive {
          top: 4rem;
        }

        @media (max-width: 1024px) {
          nav {
            padding: 0 1rem
          }
          .navLinkPCContainer {
            display: none;
          }
          .navButtonMobileContainer {
            display: block;
          }
          .navLinkMobileContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem
          }
          }
        }
      `}</style>
    </>
  );
}

export default Nav;
