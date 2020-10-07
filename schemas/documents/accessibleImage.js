import React from 'react';
import { MdImage } from 'react-icons/md';

export default {
  name: 'accessibleImage',
  type: 'document',
  title: 'Accessible Image',
  icon: MdImage,
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'The original image file. The higher the resolution, the better.',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Used to describe the contents of the image to assistive technology',
          options: {
            isHighlighted: true,
          },
          validation: (Rule) => Rule.required(),
        },
      ],
      options: {
        hotspot: true,
        storeOriginalFilename: false,
        metadata: ['palette'],
        accept: '.png, .jpg, .jpeg',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      alt: 'image.alt',
      url: 'image.asset.url',
    },
    prepare(selection) {
      return {
        title: selection.alt,
        media: <img src={selection.url} alt={selection.alt} />,
      };
    },
  },
};
