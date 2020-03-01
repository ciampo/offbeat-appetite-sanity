import MdLibraryBooks from 'react-icons/lib/md/library-books';

import { generateSeoTitleField, generateSeoDescriptionField } from '../common/seo';

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

    // Seo Description
    generateSeoDescriptionField({
      additionalDescription:
        'The ":blogPostExcerpt" placeholder will be replaced with each post excerpt',
    }),
  ],
};
