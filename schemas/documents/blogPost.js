import React from 'react';

import MdLibraryBooks from 'react-icons/lib/md/library-books';

import { generateSlugField } from '../common/slug';
import { generateSeoImageField } from '../common/seo';

// TODO: move to common
const DRAFT_PREFIX_STRING = 'drafts.';

export default {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  icon: MdLibraryBooks,
  fieldsets: [
    { name: 'info', title: 'Info' },
    { name: 'preview', title: 'Preview' },
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // Title
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the blog post',
      fieldset: 'info',
      validation: (Rule) => Rule.max(60).required(),
    },

    // Author
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      description: 'The person who wrote this blog post',
      to: [{ type: 'person' }],
      fieldset: 'info',
      validation: (Rule) => Rule.required(),
    },

    // Category
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      description: 'A blog post can only belong to one category at a time',
      to: [{ type: 'category' }],
      fieldset: 'info',
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
      fieldset: 'info',
      validation: (Rule) => Rule.unique(),
    },

    // Date published
    {
      name: 'datePublished',
      type: 'date',
      title: 'Published date',
      description: 'The publication date of the post (format: MM/DD/YYYY)',
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      validation: (Rule) => Rule.required(),
    },

    // Preview Image
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'reference',
      to: [{ type: 'accessibleImage' }],
      description: 'The image used to preview this blog post (e.g. tiles)',
      fieldset: 'preview',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'excerpt',
      type: 'string',
      title: 'Excerpt',
      description: 'A short excerpt of the blog post',
      fieldset: 'preview',
      validation: (Rule) =>
        Rule.min(40)
          .max(160)
          .required(),
    },

    // Hero Image
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'reference',
      to: [{ type: 'accessibleImage' }],
      description: "The image displayed in the page's hero",
      fieldset: 'content',
      validation: (Rule) => Rule.required(),
    },

    // Content
    {
      name: 'content',
      type: 'richPortableText',
      title: 'Content',
      description: 'The main content of the post',
      fieldset: 'content',
      validation: (Rule) => Rule.required(),
    },

    // Featured posts
    {
      name: 'related',
      type: 'array',
      title: 'Related blog posts',
      description: 'The related blog posts',
      of: [
        {
          title: 'Related Blog Post',
          type: 'reference',
          to: [{ type: 'blogPost' }],
          options: {
            filter: ({ document }) => {
              const publishedId = document._id.startsWith(DRAFT_PREFIX_STRING)
                ? document._id.substring(DRAFT_PREFIX_STRING.length)
                : document._id;
              return {
                filter: '_id != $currentBlogPostId',
                params: { currentBlogPostId: publishedId },
              };
            },
          },
        },
      ],
      validation: (Rule) => [
        Rule.max(2).error('There can be up to 2 related blog posts'),
        Rule.unique(),
      ],
    },

    // Seo Image
    generateSeoImageField(),

    // Slug
    generateSlugField({
      name: 'slug',
      source: 'title',
      maxLength: 50,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.name',
      url: 'previewImage.image.asset.url',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
        media: <img src={selection.url} alt={selection.title} />,
      };
    },
  },
};
