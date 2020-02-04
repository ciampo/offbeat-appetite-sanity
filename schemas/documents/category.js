import MdFlag from 'react-icons/lib/md/flag';

import { generateSlugField } from '../common/slug';
import { generateSeoImageField } from '../common/seo';

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: MdFlag,
  fieldsets: [{ name: 'seo', title: 'SEO' }],
  fields: [
    // Name
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The displayed name of the category',
      validation: (Rule) => Rule.max(30).required(),
    },

    // Slug
    generateSlugField({
      name: 'slug',
      source: 'name',
      maxLength: 20,
    }),

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
      validation: (Rule) => [
        Rule.min(1).warning(
          "Without any features blog post, the homepage won't show this category"
        ),
        Rule.max(3).error('There can be up to 3 featured blog posts for each category'),
        Rule.unique(),
      ],
    },

    // SEO Image
    generateSeoImageField(),
  ],
};
