import MdPermMedia from 'react-icons/lib/md/perm-media';

import {
  generateSeoTitleField,
  generateSeoDescriptionField,
  generateSeoImageField,
} from '../common/seo';

export default {
  name: 'pageGallery',
  type: 'document',
  title: 'Gallery Page',
  icon: MdPermMedia,
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
        title: 'Gallery Page',
      };
    },
  },
};
