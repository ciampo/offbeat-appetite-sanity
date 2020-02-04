import MdPerson from 'react-icons/lib/md/person';

import { generateSlugField } from '../common/slug';
import { generateImageField } from '../common/image';
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

    // Slug
    generateSlugField({
      name: 'slug',
      source: 'name',
      maxLength: 20,
    }),

    // Profile image
    generateImageField({
      name: 'image',
      title: 'Image',
      description: 'The profile image',
      altText: true,
    }),

    // Bio
    {
      name: 'bio',
      type: 'bioPortableText',
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
    {
      name: 'email',
      type: 'emailAddress',
      title: 'Email address',
      description: 'The email address associated to this person',
    },

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
  ],
};
