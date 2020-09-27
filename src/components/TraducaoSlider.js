import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Slider from "react-slick";
import { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class TraducaoSlider extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const PostContent = HTMLContent;

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
          breakpoint: 1028,
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
      <Slider {...settings}>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              {post.frontmatter.flagimage ? (
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.flagimage.publicURL,
                    alt: `featured image thumbnail for post ${post.frontmatter.lingua}`,
                  }}
                />
              ) : null}

              <PostContent content={post.html} />
            </div>
          ))}
      </Slider>
    );
  }
}

TraducaoSlider.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query TraducaoSliderQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "traducao-page" } } }
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                lingua
                flagimage {
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TraducaoSlider data={data} count={count} />}
  />
);
