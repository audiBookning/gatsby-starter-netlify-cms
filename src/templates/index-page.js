import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React, { useCallback, useContext, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import Slider from "react-slick";
import { FontContext } from "../components/fontContext";
import Layout from "../components/Layout";

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

  const { textFont, setTextFont } = useContext(FontContext);

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
        <Slider {...settings}>
          <div>
            <div
              className="text-traduction"
              style={{ color: "#ccc", fontSize: textFont }}
            >
              <img src="bandeiras/pt.svg" />
              <br />
              <p>
                Acordar com a acalmia da Lagoa é algo que não se consegue
                traduzir em palavras.
              </p>
              <p>
                Depois disfruta-se de um bom pequeno almoço, enquanto se observa
                a visita matinal dos patos à escola de vela.
              </p>
              <p>
                A temperatura amena, que a maior Lagoa de água salgada da Europa
                proporciona, gerando um “microclima”, convida agora a um passeio
                pedestre, ou de Bicicleta, sabendo que no regresso teremos uma
                piscina de água aquecida à nossa espera.
              </p>
              <p>
                Uma vista dinâmica, apenas comparável a um quadro que se vai
                re-desenhando ao sabor das tonalidades das pequenas embarcações,
                dos kitesurf, dos desportos à vela e paddling board, da
                disposição solar, da imensidão da lagoa, das aves, na sua
                maioria de espécies protegidas, faz-nos esquecer que os meios
                audiovisuais existem.
              </p>
              <p>
                Para o fim do dia, este local reserva-nos ainda um pequeno
                tesouro, de onde se pode disfrutar dos mais belos pôr de sol da
                zona Oeste.
              </p>
            </div>
          </div>

          <div>
            <img src="bandeiras/fr.svg" />
            <br />
            <p>
              Se réveiller avec le calme de la “Lagoa” est un fait impossible de
              décrire par des mots.
            </p>
            <p>
              Tout en prenant un bon petit déjeuner, on peut observer la visite
              matinale des canards devant l’école de voile.
            </p>
            <p>
              L’agréable température, rendue par la plus grande lagune d’eau
              salée de l’Europe, cause un “microclimat”, invitant à une
              promenade, soit à pied, soit à vélo, sachant qu’au retour, une
              accueillante piscine chauffante vous attend.
            </p>
            <p>
              Vous profiterez encore d’une vue dynamique, comme un tableau que
              se redessine peu à peu devant vos yeux, avec toute une gamme de
              nuances de couleur: des petits bateaux de pêche et à voile, des
              kitesurfs, des paddling board, et d’un soleil embrassant
              l’imensité de la lagune avec des oiseaux s’y posant, protegés dans
              sa majorité. Vous oublierez vite toute activité audiovisuelle.
            </p>
            <p>
              À la fin de la journée, cet endroit vous réserve encore un petit
              trésor … Devant vos yeux, défileront les plus beaux couchers de
              soleil de l’Ouest portugais.
            </p>
          </div>
          <div style={{ fontSize: textFont }}>
            <img src="bandeiras/gb.svg" />
            <br />
            <p>
              Waking up at the calm of “Lagoa de Óbidos (Foz do Arelho)” is an
              event impossible to describe in words.
            </p>
            <p>
              While having a good breakfast, the ducks’ morning visit, in front
              of the sailing school, can be observed.
            </p>
            <p>
              The mild temperature, which Europe's largest saltwater lagoon
              provides, generating a “microclimate”, inviting you to take a
              walk, either on foot or by bike, knowing that on your return you
              will have, a welcoming heated swimming pool waiting for you.
            </p>
            <p>
              You will still enjoy a dynamic view, like a painting that is
              gradually being redrawn before your eyes, with a whole range of
              color shades, like small fishing and sailing boats, kitesurfs,
              paddling boards, and a sun embracing the immensity of the lagoon
              with birds landing there, most of them protected species. You will
              quickly forget any audiovisual activity.
            </p>
            <p>
              At the end of the day, this place still has a small treasure for
              you … you will watch and enjoy the most beautiful sunsets of
              Portuguese West Coast.
            </p>
          </div>
        </Slider>
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
