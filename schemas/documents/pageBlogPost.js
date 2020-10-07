import { MdLibraryBooks } from 'react-icons/md';

import { generateSeoTitleField } from '../common/seo';

export default {
  name: 'pageBlogPost',
  type: 'document',
  title: 'Blog Post Page',
  icon: MdLibraryBooks,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fieldsets: [{ name: 'seo', title: 'SEO' }],
  fields: [
    // Seo Title
    generateSeoTitleField({
      additionalDescription:
        'The ":blogPostTitle" placeholder will be replaced with each post\'s title. The ":categoryName" placeholder will be replaced with each post\'s category name.',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Each Blog Post Page',
      };
    },
  },
};
