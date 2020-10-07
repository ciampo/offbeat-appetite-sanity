import client from 'part:@sanity/base/client';

import { MdSettings } from 'react-icons/md';

const howManyCategoriesQuery = `//groq
  count(*[_type == "category" && !(_id in path("drafts.**"))]{})
`;

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: MdSettings,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    //  order
    {
      name: 'categoriesOrder',
      type: 'array',
      title: 'Categories order',
      description:
        'The order used to list the categories in the site. (Note: it doesn`t affect the homepage sections)',
      of: [{ name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] }],
      validation: (Rule) =>
        Rule.unique().custom(async (currentlySelectedCategories) => {
          const howManyCategories = await client.fetch(howManyCategoriesQuery);
          return howManyCategories === currentlySelectedCategories.length
            ? true
            : 'All existing categories must be added to the list';
        }),
    },

    // No index pages
    {
      name: 'noIndexPages',
      type: 'array',
      title: 'Pages excluded from indexing',
      description:
        'These pages will not appear in the sitemap and will not be indexed by search engine crawlers',
      of: [
        {
          name: 'page',
          title: 'Page',
          type: 'reference',
          to: [
            { type: 'pageHome' },
            { type: 'pageAbout' },
            { type: 'pageCategory' },
            { type: 'pageBlogPost' },
            { type: 'pageSearch' },
            { type: 'pageGallery' },
            { type: 'pageThankYou' },
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'canonicalUrl',
    },
  },
};
