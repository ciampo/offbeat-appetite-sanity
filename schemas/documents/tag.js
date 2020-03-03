import MdStyle from 'react-icons/lib/md/style';

import { generateSlugField } from '../common/slug';

export default {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  icon: MdStyle,
  fields: [
    // Name
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The displayed name of the tag',
      validation: (Rule) => Rule.required(),
    },

    // Slug
    generateSlugField({
      name: 'slug',
      source: 'name',
      maxLength: 20,
    }),
  ],
};
