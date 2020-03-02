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

    // Images
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      description: 'The images features in the gallery page.',
      of: [
        {
          title: 'Featured Gallery Image',
          type: 'reference',
          to: [{ type: 'accessibleImage' }],
        },
      ],
      validation: (Rule) => [
        Rule.min(1).error('The page needs at least one image!'),
        Rule.unique(),
      ],
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
