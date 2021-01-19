import PropTypes from "prop-types";
import React from "react";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = (props) => {
  const { entry, getAsset, fieldsMetaData  } = props
  // console.log('IndexPagePreview props: ', props)
  // console.log('IndexPagePreview fieldsMetaData : ', fieldsMetaData )
  // console.log('IndexPagePreview entry: ', entry)
  const data = entry.getIn(["data"]).toJS();
  // console.log("IndexPagePreview data: ", JSON.stringify(data, null, 2));
  //const formatedGallery = data.gallery.map((image) => getAsset(image.image));
  /* console.log(
    "IndexPagePreview formatedGallery: ",
    JSON.stringify(formatedGallery, null, 2)
  ); */

  /* const pp = loadEntry('tags_files', 'mytags')
  console.log("IndexPagePreview loadEntry pp: ", JSON.stringify(pp, null, 2)); */

   /* widgetsFor('mytags').foreach(function(tags, index) {
     console.log("IndexPagePreview widgetsFor tags: ", JSON.stringify(tags, null, 2));
    const tagsTemp = tags.getIn(["data"]).toJS();
    console.log("IndexPagePreview widgetsFor tagsTemp: ", JSON.stringify(tagsTemp, null, 2));
    
  }) */

  if (data) {
    return (
      <IndexPageTemplate
        jumbo={getAsset(data.jumbo)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        gallery={data.gallery || { gallery: [] }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
