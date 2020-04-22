import React from 'react';

import MdLibraryBooks from 'react-icons/lib/md/library-books';

import { generateSlugField } from '../common/slug';
import { generateSeoImageField } from '../common/seo';

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
      validation: (Rule) => Rule.max(50).required(),
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
      validation: (Rule) => Rule.unique().min(1),
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

    // Seo Image
    generateSeoImageField(),

    // Keywords
    {
      name: 'keywords',
      title: 'Keywords',
      description: 'A list of keywords associated to this blog post',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule) =>
            Rule.regex(/,/, {
              name: 'commas',
              invert: true,
            }).required(),
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },

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
      category: 'category.name',
      excerpt: 'excerpt',
      url: 'previewImage.image.asset.url',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `[${selection.category}] ${selection.excerpt}`,
        media: <img src={selection.url} alt={selection.title} />,
      };
    },
  },
};
