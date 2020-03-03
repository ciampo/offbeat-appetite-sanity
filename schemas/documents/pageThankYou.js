import FaHeart from 'react-icons/lib/fa/heart';

import {
  generateSeoTitleField,
  generateSeoDescriptionField,
  generateSeoImageField,
} from '../common/seo';

export default {
  name: 'pageThankYou',
  type: 'document',
  title: 'Thank You Page (after form submission)',
  icon: FaHeart,
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

    // Body content
    {
      name: 'content',
      type: 'richPortableText',
      title: 'Content',
      description: 'The main content of the page',
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
        title: 'Thank You Page',
      };
    },
  },
};
