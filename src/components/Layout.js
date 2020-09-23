import { withPrefix } from "gatsby";
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import { FontContext } from "./fontContext";
import "./more.sass";
import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = (props) => {
  const { title, description } = useSiteMetadata();

  const [textFont, setTextFont] = useState(16);

  const value = useMemo(() => {
    console.log("font memo: ", textFont);
    return { textFont, setTextFont };
  }, [textFont, setTextFont]);

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <FontContext.Provider value={value}>
        <Navbar />
        <div>{props.children}</div>
        <Footer />
      </FontContext.Provider>
    </div>
  );
};

export default TemplateWrapper;
