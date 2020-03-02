import React from 'react';

export default {
  name: 'captionedImage',
  title: 'Captioned Image',
  description: 'An image with an optional caption',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'reference',
      to: [{ type: 'accessibleImage' }],
      description: 'The image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'The caption text (optional)',
    },
  ],
  preview: {
    select: {
      alt: 'image.image.alt',
      caption: 'caption',
      url: 'image.image.asset.url',
    },
    prepare(selection) {
      return {
        title: `📸 ${selection.alt}`,
        subtitle: selection.caption || '[No caption]',
        media: <img src={selection.url} alt={selection.alt} />,
      };
    },
  },
};
