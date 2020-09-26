import styled from "@emotion/styled";
import { List } from "immutable";
import { WidgetPreviewContainer } from "netlify-cms-ui-default";
import PropTypes from "prop-types";
import React from "react";

const StyledImage = styled(({ src }) => {
  console.log("+++++++++++++++++++++++++++++++");
  return <img src={src || ""} role="presentation" />;
})`
  display: block;
  max-width: 100%;
  height: auto;
`;

const StyledImageAsset = ({ getAsset, value, field }) => {
  return <StyledImage src={getAsset(value, field)} />;
};

const ImagePreviewContent = (props) => {
  console.log("***********************************");
  const { value, getAsset, field } = props;
  if (Array.isArray(value) || List.isList(value)) {
    return value.map((val) => (
      <StyledImageAsset
        key={val}
        value={val}
        getAsset={getAsset}
        field={field}
      />
    ));
  }
  return <StyledImageAsset {...props} />;
};

const ImagePreview = (props) => {
  console.log("***********************************");
  //console.log("ImagePreview props: ", JSON.stringify(props, null, 2));
  console.log("***********************************");
  return (
    <WidgetPreviewContainer>
      {props.value ? <ImagePreviewContent {...props} /> : null}
    </WidgetPreviewContainer>
  );
};

ImagePreview.propTypes = {
  getAsset: PropTypes.func.isRequired,
  value: PropTypes.node,
};

export default ImagePreview;