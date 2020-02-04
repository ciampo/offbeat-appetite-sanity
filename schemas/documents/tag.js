import MdStyle from 'react-icons/lib/md/style';

export default {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  icon: MdStyle,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The displayed name of the tag',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Note: changing a slug of an exising document is usually a bad idea',
      options: {
        source: 'name',
        maxLength: 20,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
