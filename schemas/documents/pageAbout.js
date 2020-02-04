import MdDescription from 'react-icons/lib/md/description';

import {
  generateSeoTitleField,
  generateSeoDescriptionField,
  generateSeoImageField,
} from '../common/seo';

export default {
  name: 'pageAbout',
  type: 'document',
  title: 'About Page',
  icon: MdDescription,
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

    // Body content
    {
      name: 'content',
      type: 'bodyPortableText',
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
};
