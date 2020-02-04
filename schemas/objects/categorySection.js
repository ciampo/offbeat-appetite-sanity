export default {
  name: 'categorySection',
  title: 'Category Section',
  type: 'object',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },

    // Section Title
    {
      name: 'title',
      type: 'string',
      title: 'Section Title',
      description:
        'The title shown in the category section. The ":categoryName" placeholder will be replaced with each category name',
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
        title: selection.category,
        subtitle: selection.title,
      };
    },
  },
};
