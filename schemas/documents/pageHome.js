import MdHome from 'react-icons/lib/md/home';

import {
  generateSeoTitleField,
  generateSeoDescriptionField,
  generateSeoImageField,
} from '../common/seo';

// const replaceDescription =
// 'The ":categoryName" placeholder will be replaced with each category name';

export default {
  name: 'pageHome',
  type: 'document',
  title: 'Home Page',
  icon: MdHome,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'reference',
      to: [{ type: 'accessibleImage' }],
      description: "The image displayed in the page's hero",
      validation: (Rule) => Rule.required(),
    },

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

  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Home Page',
      };
    },
  },
};
