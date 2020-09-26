import NetlifyCmsWidgetFile from "netlify-cms-widget-file";
import imagePreviewComponent from "./ImagePreview";
import schema from "./schema";

export const imageControlComponent = NetlifyCmsWidgetFile.withFileControl({
  forImage: true,
});
export const imageWidget = (opts = {}) => ({
  name: "imagetest",
  imageControlComponent,
  imagePreviewComponent,
  schema,
  ...opts,
});

export const imagePreviewCmp = imagePreviewComponent;
export const imageSchema = schema;

export const NetlifyCmsWidgetImage = {
  imageWidget,
  imageControlComponent,
  imagePreviewComponent,
};
export default NetlifyCmsWidgetImage;
