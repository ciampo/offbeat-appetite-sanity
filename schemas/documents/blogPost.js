import MdLibraryBooks from 'react-icons/lib/md/library-books';

import { generateSlugField } from '../common/slug';

export default {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  icon: MdLibraryBooks,
  fields: [
    // Title
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the blog post',
      validation: (Rule) => Rule.max(60).required(),
    },

    // Slug
    generateSlugField({
      name: 'slug',
      source: 'title',
      maxLength: 50,
    }),

    // Author
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      description: 'The person who wrote this blog post',
      to: [{ type: 'person' }],
      validation: (Rule) => Rule.required(),
    },

    // Category
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      description: 'A blog post can only belong to one category at a time',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },

    // Tags
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'A blog post can be associated to as many tags as there are available',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
      options: {
        sortable: false,
      },
      validation: (Rule) => Rule.unique(),
    },

    // Excerpt
    {
      name: 'excerpt',
      type: 'string',
      title: 'Excerpt',
      description: 'A short excerpt of the blog post',
      validation: (Rule) =>
        Rule.min(40)
          .max(160)
          .required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.name',
    },
  },
};
