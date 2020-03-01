export default {
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [
        { type: 'pageHome' },
        { type: 'pageAbout' },
        { type: 'pageCategory' },
        { type: 'pageSearch' },
        { type: 'pageGallery' },
      ],
      validation: (Rule) => Rule.required(),
    },

    // Section Title
    {
      name: 'label',
      type: 'string',
      title: 'Navigation Link label',
      description:
        'The text used to label the navigation link. The ":categoryName" placeholder will be replaced with each category name',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
    prepare(selection) {
      return {
        title: selection.title,
      };
    },
  },
};
