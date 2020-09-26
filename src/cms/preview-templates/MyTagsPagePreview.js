import PropTypes from "prop-types";
import React from "react";
import { MytagsPageTemplate } from "../../templates/mytags-page";

const MyTagsPagePreview = ({ entry }) => (
  <MytagsPageTemplate
    name={entry.getIn(["data", "name"])}
    description={entry.getIn(["data", "description"])}
  />
);

MyTagsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default MyTagsPagePreview;
