import React from 'react';

import { generateImageField } from '../common/image';

export default {
  ...generateImageField({
    name: 'captionedImage',
    title: 'Captioned image',
    description: 'An image with an optional caption',
    altText: true,
    caption: true,
  }),
  preview: {
    select: {
      alt: 'alt',
      caption: 'caption',
      url: 'asset.url',
    },
    prepare(selection) {
      return {
        title: `[image] ${selection.alt}`,
        subtitle: selection.caption,
        media: <img src={selection.url} alt={selection.alt} />,
      };
    },
  },
};
