import MdDescription from 'react-icons/lib/md/description';

import {
  generateSeoTitleField,
  generateSeoDescriptionField,
  generateSeoImageField,
} from '../common/seo';
import { generateImageField } from '../common/image';

// const replaceDescription =
// 'The ":categoryName" placeholder will be replaced with each category name';

export default {
  name: 'pageHome',
  type: 'document',
  title: 'Home Page',
  icon: MdDescription,
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fieldsets: [{ name: 'seo', title: 'SEO' }],
  fields: [
    // Title
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title shown in the page',
      validation: (Rule) => Rule.required(),
    },

    // Subtitle
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'The subtitle shown in the page under the title',
      validation: (Rule) => Rule.required(),
    },

    // Hero Image
    generateImageField({
      name: 'heroImage',
      title: 'Hero Image',
      description: "The image displayed in the page's hero",
      altText: true,
    }),

    // Category sections
    {
      name: 'categorySections',
      type: 'array',
      title: 'Category Sections',
      description: 'Each category will have its own section showing its featured blog posts.',
      of: [{ type: 'categorySection' }],
      validation: (Rule) => Rule.unique(),
    },

    // Seo Title
    generateSeoTitleField(),

    // Seo Description
    generateSeoDescriptionField(),

    // Seo Image
    generateSeoImageField(),
  ],
};
