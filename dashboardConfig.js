export default {
  widgets: [
    {
      name: 'project-info',
      layout: {
        width: 'full',
        height: 'small',
      },
    },
    {
      name: 'project-users',
    },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['blogPost'] },
      layout: { width: 'medium' },
    },
    // TODO:
    // - add netlify
  ],
};
