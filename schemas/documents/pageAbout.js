import MdPersonPin from 'react-icons/lib/md/person-pin';

import {
  generateSeoTitleField,
  generateSeoDescriptionField,
  generateSeoImageField,
} from '../common/seo';

export default {
  name: 'pageAbout',
  type: 'document',
  title: 'About Page',
  icon: MdPersonPin,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fieldsets: [{ name: 'seo', title: 'SEO' }],
  fields: [
    // Title
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the page (used in nav)',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Title',
      description: 'The title shown in the page hero',
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
        title: 'About Page',
      };
    },
  },
};
