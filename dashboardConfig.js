export default {
  widgets: [
    {
      name: 'document-list',
      options: { title: 'Last edited blog posts', order: '_updatedAt desc', types: ['blogPost'] },
      layout: { width: 'small', height: 'small' },
    },
    {
      name: 'netlify',
      options: {
        title: 'Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: '91dcc655-bce1-4197-8e9c-856c92df5a58',
            // No build hook ID as there is already CI/CD in place
            name: 'offbeatappetite-sanity-studio',
          },
          {
            title: 'Website — Staging',
            apiId: '5d37d630-bbc1-41c4-8c3d-c3f4a068359a',
            buildHookId: '5e5fc185eebfcc2bb5661fc5',
            name: 'offbeatappetite-staging',
          },
          {
            title: 'Website — PRODUCTION',
            apiId: '8a466cb6-4eef-463d-81be-18240576884d',
            buildHookId: '5e5f87f4c7b55b0d099b0da1',
            name: 'offbeatappetite',
          },
        ],
      },
      layout: { width: 'medium', height: 'small' },
    },
    {
      name: 'project-users',
      layout: { width: 'small', height: 'small' },
    },
    {
      name: 'project-info',
      layout: { width: 'medium', height: 'small' },
    },
    {
      name: 'orphans',
      layout: { width: 'medium', height: 'small' },
    },
  ],
};
