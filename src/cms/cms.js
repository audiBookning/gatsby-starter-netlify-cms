import CMS from "netlify-cms-app";
import {
  imageControlComponent,
  imagePreviewCmp,
  imageSchema,
} from "./../components/image-widget/index";
// import uploadcare from 'netlify-cms-media-library-uploadcare'
//import cloudinary from "netlify-cms-media-library-cloudinary";
/* import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview"; */
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import MyTagsPagePreview from "./preview-templates/MyTagsPagePreview";
import TraducaoPostPreview from "./preview-templates/TraducaoPostPreview";

// CMS.registerMediaLibrary(uploadcare)
//CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("mytags", MyTagsPagePreview);
CMS.registerPreviewTemplate("traducao", TraducaoPostPreview);
/* CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview); */

CMS.registerWidget(
  "imagetest",
  imageControlComponent,
  imagePreviewCmp,
  imageSchema
);
