import PropTypes from "prop-types";
import React from "react";
import { TraducaoPostTemplate } from "../../templates/traducao-page";

const TraducaoPostPreview = ({ entry, widgetFor }) => {
  return (
    <TraducaoPostTemplate
      content={widgetFor("body")}
      lingua={entry.getIn(["data", "lingua"])}
    />
  );
};

TraducaoPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TraducaoPostPreview;
