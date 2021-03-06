import { MdFlag } from 'react-icons/md';

import { generateSlugField } from '../common/slug';
import { generateSeoImageField } from '../common/seo';

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: MdFlag,
  fieldsets: [{ name: 'seo', title: 'SEO' }],
  fields: [
    // Name (plural)
    {
      name: 'name',
      type: 'string',
      title: 'Name (plural)',
      description: 'The displayed name of the category when used in its plural form',
      validation: (Rule) => Rule.max(30).required(),
    },

    // Name (singular)
    {
      name: 'nameSingular',
      type: 'string',
      title: 'Name (singular)',
      description: 'The displayed name of the category when used in its singular form',
      validation: (Rule) => Rule.max(30).required(),
    },

    // Description
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: 'The description displayed throughout the site under the category name',
      validation: (Rule) => Rule.required(),
    },

    // Hero Image
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'reference',
      to: [{ type: 'accessibleImage' }],
      description: "The image displayed in the category page's hero",
      validation: (Rule) => Rule.required(),
    },

    // Featured posts
    {
      name: 'featured',
      type: 'array',
      title: 'Featured blog posts',
      description: 'The featured blog posts for this category. Shown in the home page.',
      of: [
        {
          title: 'Featured Content',
          type: 'reference',
          to: [{ type: 'blogPost' }],
          options: {
            filter: ({ document }) => ({
              // Only show blog post that are from this category
              filter: `references(*[_type=="category" && slug.current == "${document.slug.current}"]._id)`,
            }),
          },
        },
      ],
      validation: (Rule) =>
        Rule.unique().custom((currentlySelectedBlogPosts) => {
          return currentlySelectedBlogPosts.length === 1 || currentlySelectedBlogPosts.length == 3
            ? true
            : 'Each category should have either 1 or 3 featured posts';
        }),
    },

    // SEO Image
    generateSeoImageField(),

    // Slug
    generateSlugField({
      name: 'slug',
      source: 'name',
      maxLength: 20,
    }),
  ],
};
