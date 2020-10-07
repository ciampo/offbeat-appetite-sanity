import { MdSearch } from 'react-icons/md';

import {
  generateSeoTitleField,
  generateSeoDescriptionField,
  generateSeoImageField,
} from '../common/seo';

export default {
  name: 'pageSearch',
  type: 'document',
  title: 'Search Page',
  icon: MdSearch,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fieldsets: [{ name: 'seo', title: 'SEO' }],
  fields: [
    // Title
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: `The title shown in the page`,
      validation: (Rule) => Rule.required(),
    },

    // Category Filters - Title
    {
      name: 'categoryFilterTitle',
      type: 'string',
      title: 'Category Filters Title',
      description: `The title used for the Category filters.`,
      validation: (Rule) => Rule.required(),
    },

    // Tag Filters - Title
    {
      name: 'tagFilterTitle',
      type: 'string',
      title: 'Tag Filters Title',
      description: `The title used for the Tag filters`,
      validation: (Rule) => Rule.required(),
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
        title: 'Search Page',
      };
    },
  },
};
