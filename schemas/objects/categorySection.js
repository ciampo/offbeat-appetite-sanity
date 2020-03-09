export default {
  name: 'categorySection',
  title: 'Category Section',
  type: 'object',
  fields: [
    // Section Title
    {
      name: 'title',
      type: 'string',
      title: 'Section Title',
      description: 'The title shown in the category section',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.name',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.category,
      };
    },
  },
};
