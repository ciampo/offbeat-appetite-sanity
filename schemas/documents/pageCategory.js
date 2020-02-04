import MdDescription from 'react-icons/lib/md/description';

import { generateSeoTitleField, generateSeoDescriptionField } from '../common/seo';

const replaceDescription =
  'The ":categoryName" placeholder will be replaced with each category name';

export default {
  name: 'pageCategory',
  type: 'document',
  title: 'Category Page',
  icon: MdDescription,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fieldsets: [{ name: 'seo', title: 'SEO' }],
  fields: [
    // Title
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: `The title shown in the page. ${replaceDescription}`,
      validation: (Rule) => Rule.required(),
    },

    // Seo Title
    generateSeoTitleField({
      additionalDescription: replaceDescription,
    }),

    // Seo Description
    generateSeoDescriptionField({
      additionalDescription: replaceDescription,
    }),
  ],
};
