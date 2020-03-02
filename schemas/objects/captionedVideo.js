import React from 'react';

export default {
  name: 'captionedVideo',
  title: 'Captioned Video',
  description: 'A video with an optional caption',
  type: 'object',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'reference',
      to: [{ type: 'accessibleVideo' }],
      description: 'The video',
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
      alt: 'video.video.alt',
      caption: 'caption',
      url: 'video.video.poster.asset.url',
    },
    prepare(selection) {
      return {
        title: `🎥 ${selection.alt}`,
        subtitle: selection.caption || '[No caption]',
        media: <img src={selection.url} alt={selection.alt} />,
      };
    },
  },
};
