import React from 'react';
import MdPerson from 'react-icons/lib/md/person';

import { generateSlugField } from '../common/slug';
import { generateEmailField } from '../common/email';
import { iso2 } from '../common/countryCodes';

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: MdPerson,
  fields: [
    // Name
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of this person',
      validation: (Rule) => Rule.required(),
    },

    // Profile image
    {
      name: 'image',
      title: 'Image',
      type: 'reference',
      to: [{ type: 'accessibleImage' }],
      description: 'The profile image',
      validation: (Rule) => Rule.required(),
    },

    // Bio
    {
      name: 'bio',
      type: 'text',
      rows: 5,
      title: 'Bio',
      description: "This person's biography",
      validation: (Rule) => Rule.required(),
    },

    // Homepage
    {
      name: 'homepage',
      type: 'url',
      title: 'Homepage',
      description: 'The URL associated to this person',
      validation: (Rule) => Rule.required(),
    },

    // Email
    generateEmailField({
      name: 'email',
      title: 'emailAddress',
      description: 'The email address associated to this person',
    }),

    // Country
    {
      name: 'country',
      type: 'string',
      title: 'Country',
      description:
        'The country where this person is from. For reference, visit https://www.iban.com/country-codes',
      options: {
        list: iso2.sort(),
      },
      validation: (Rule) => Rule.required(),
    },

    // Slug
    generateSlugField({
      name: 'slug',
      source: 'name',
      maxLength: 20,
    }),
  ],

  preview: {
    select: {
      name: 'name',
      url: 'image.image.asset.url',
    },
    prepare(selection) {
      return {
        title: selection.name,
        media: <img src={selection.url} alt={selection.name} />,
      };
    },
  },
};
