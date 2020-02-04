// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import person from './documents/person';
import tag from './documents/tag';
import category from './documents/category';
import blogPost from './documents/blogPost';
import siteSettings from './documents/siteSettings';
import pageCategory from './documents/pageCategory';
import pageBlogPost from './documents/pageBlogPost';
import pageAbout from './documents/pageAbout';
import pageHome from './documents/pageHome';
import siteMiscContent from './documents/siteMiscContent';

// Object types
import captionedImage from './objects/captionedImage';
import bioPortableText from './objects/bioPortableText';
import bodyPortableText from './objects/bodyPortableText';
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

    // Objects
    captionedImage,
    bioPortableText,
    bodyPortableText,
    emailAddress,
    categorySection,
    navItem,
  ]),
});
