// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import accessibleImage from './documents/accessibleImage';
import accessibleVideo from './documents/accessibleVideo';
import person from './documents/person';
import tag from './documents/tag';
import category from './documents/category';
import blogPost from './documents/blogPost';
import siteMiscContent from './documents/siteMiscContent';
import siteSettings from './documents/siteSettings';
import pageHome from './documents/pageHome';
import pageAbout from './documents/pageAbout';
import pageBlogPost from './documents/pageBlogPost';
import pageCategory from './documents/pageCategory';
import pageSearch from './documents/pageSearch';
import pageGallery from './documents/pageGallery';
import pageThankYou from './documents/pageThankYou';

// Object types
import captionedImage from './objects/captionedImage';
import captionedVideo from './objects/captionedVideo';
import mediaGallery from './objects/mediaGallery';
import recipe from './objects/recipe';
import simplePortableText from './objects/simplePortableText';
import richPortableText from './objects/richPortableText';
import emailAddress from './objects/emailAddress';
import categorySection from './objects/categorySection';
import navItem from './objects/navItem';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Documents
    accessibleImage,
    accessibleVideo,
    siteSettings,
    siteMiscContent,
    blogPost,
    category,
    tag,
    person,
    pageCategory,
    pageAbout,
    pageBlogPost,
    pageHome,
    pageSearch,
    pageGallery,
    pageThankYou,

    // Objects
    captionedImage,
    captionedVideo,
    mediaGallery,
    recipe,
    simplePortableText,
    richPortableText,
    emailAddress,
    categorySection,
    navItem,
  ]),
});
