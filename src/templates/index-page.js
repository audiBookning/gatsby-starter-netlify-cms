import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import Layout from "../components/Layout";
import TraducaoSlider from "../components/TraducaoSlider";

const getImageSrc = (imageInfo) => {
  const { childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    const { src, srcSet, sizes } = image.childImageSharp.fluid;
    const { height, width } = image.childImageSharp.original;

    return {
      key: Math.random().toString(),
      src,
      srcSet,
      sizes,
      width,
      height,
    };
  }

  if (!!childImageSharp) {
    const { src, srcSet, sizes } = childImageSharp.fluid;
    const { height, width } = childImageSharp.original;

    return {
      key: Math.random().toString(),
      src,
      srcSet,
      sizes,
      width,
      height,
    };
  }

  if (!!image && typeof image === "string") return { src: image };
};

export const IndexPageTemplate = ({ title, subheading, jumbo, gallery }) => {
  //console.log("IndexPageTemplate jumbo: ", JSON.stringify(jumbo, null, 2));

  const photos = gallery.map((x) => {
    return getImageSrc(x);
  });

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  var settings = {
    dots: true,
    /*  */
    customPaging: function (i) {
      const linguagem = ["PT", "FR", "EN"];
      return (
        <button href="#">
          <p>{linguagem[i]}</p>
        </button>
      );
    },
    /*  */
    //centerMode: true,
    infinite: true,
    swipeToSlide: true,
    centerPadding: "60px",
    slidesToShow: 3,
    /*  */
    /* infinite: false,    
    slidesToShow: 3, */
    speed: 500,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!jumbo.childImageSharp ? jumbo.childImageSharp.fluid.src : jumbo
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
          backgroundPositionY: "-40px",
          backgroundPositionX: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow:
                "rgb(255 68 0 / 30%) 0.5rem 0px 0px, rgb(255 68 0 / 30%) -0.5rem 0px 0px",
              backgroundColor: "rgb(255 68 0 / 10%)",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            {title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow:
                "rgb(255 68 0 / 30%) 0.5rem 0px 0px, rgb(255 68 0 / 30%) -0.5rem 0px 0px",
              backgroundColor: "rgb(255 68 0 / 10%)",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            {subheading}
          </h3>
        </div>
        <TraducaoSlider />

        <div style={{ display: "none" }}>
          <div className="slick-slider">
            <div className="slick-list">
              <div className="slick-track">
                <div className="slick-slide"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="galeria">
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  gallery: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        jumbo={frontmatter.jumbo}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        gallery={frontmatter.gallery}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        jumbo {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        gallery {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              original {
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;

/* 

intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        
*/
