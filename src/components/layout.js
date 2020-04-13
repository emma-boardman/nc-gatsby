import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../utils/customHooks/useOnClickOutside";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import NCLogoSm from "../../static/assets/logoNCsm.svg"
import "./layout.css"

import H1Font from "../../static/assets/fonts/poppins-bold-webfont.woff2"
import { Helmet }from "react-helmet"

const Layout = ({ children }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);
  const nav = document.querySelector("nav");
  useOnClickOutside(nav, () => setIsMenuExpanded(false));
  const subMenu = document.querySelector("#sub-menu");
  useOnClickOutside(subMenu, () => setIsSubMenuExpanded(false));

  if (typeof window !== `undefined`) {
    window.prismic = {
      endpoint: "https://nihongoscotland.cdn.prismic.io/api/v2",
    }
  }

  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="font"
          href={H1Font}
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Header isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} isSubMenuExpanded={isSubMenuExpanded} setIsSubMenuExpanded={setIsSubMenuExpanded}/>

      <main>{children}</main>
      <footer>
        <div className="footer__logo">
          <img
            src={NCLogoSm}
            alt="Nihongo Connection"
            style={{ width: `200px` }}
          ></img>
        </div>
        <div className="footer__info">
          <p>
            Nihongo Scotland is a part of{" "}
            <a href="https://nihongoconnection.com" target="_blank">
              Nihongo Connection
            </a>
            . Visit{" "}
            <a href="https://nihongoconnection.com" target="_blank">
              NihongoConnection.com
            </a>{" "}
            for more Japanese learning opportunities and resources.
          </p>
          © {new Date().getFullYear()} Nihongo Connection
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
