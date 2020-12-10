import { MdHome } from 'react-icons/md';

import {
  generateSeoTitleField,
  generateSeoDescriptionField,
  generateSeoImageField,
} from '../common/seo';

export default {
  name: 'pageHome',
  type: 'document',
  title: 'Home Page',
  icon: MdHome,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fieldsets: [{ name: 'seo', title: 'SEO' }],
  fields: [
    // Title
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title shown in the page',
      validation: (Rule) => Rule.required(),
    },

    // Subtitle
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: "The title shown in the page's hero",
      validation: (Rule) => Rule.required(),
    },

    // Hero Image
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'reference',
      to: [{ type: 'accessibleImage' }],
      description: "The image displayed in the page's hero",
      validation: (Rule) => Rule.required(),
    },

    // Hero CTA Label
    {
      name: 'heroCtaLabel',
      type: 'string',
      title: "Hero CTA Button's label",
      description: "The label of the CTA button in the page's hero",
      validation: (Rule) => Rule.required(),
    },

    // About section title
    {
      name: 'aboutTitle',
      type: 'string',
      title: 'About section title',
      description: 'The title shown in the "About" section',
      validation: (Rule) => Rule.required(),
    },

    // About section content
    {
      name: 'aboutContent',
      type: 'simplePortableText',
      title: 'About section Content',
      description: 'The content of the "About" section',
      validation: (Rule) => Rule.required(),
    },

    // About section Image
    {
      name: 'aboutImage',
      title: 'A Image',
      type: 'reference',
      to: [{ type: 'accessibleImage' }],
      description: 'The image displayed in the "About" section',
      validation: (Rule) => Rule.required(),
    },
    // Category sections
    {
      name: 'categorySections',
      type: 'array',
      title: 'Category Sections',
      description: 'Each category will have its own section showing the featured blog posts.',
      of: [{ type: 'categorySection' }],
      validation: (Rule) => Rule.unique().min(1),
    },

    // Seo Title
    generateSeoTitleField(),

    // Seo Description
    generateSeoDescriptionField(),

    // Seo Image
    generateSeoImageField(),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Home Page',
      };
    },
  },
};
