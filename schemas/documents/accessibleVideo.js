import React from 'react';
import { MdVideocam as MdVideoCam } from 'react-icons/md';

export default {
  name: 'accessibleVideo',
  type: 'document',
  title: 'Accessible Video',
  icon: MdVideoCam,
  fields: [
    {
      name: 'video',
      type: 'file',
      title: 'Video',
      description: 'The original video file.',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Used to describe the contents of the video to assistive technology',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'poster',
          type: 'image',
          title: 'Poster image',
          description: "The poster image used as the video's thumbnail",
          options: {
            hotspot: true,
            storeOriginalFilename: false,
            metadata: ['palette'],
            accept: '.png, .jpg, .jpeg',
          },
          validation: (Rule) => Rule.required(),
        },
      ],
      options: {
        storeOriginalFilename: false,
        accept: 'video/mp4',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      alt: 'video.alt',
      url: 'video.poster.asset.url',
    },
    prepare(selection) {
      return {
        title: selection.alt,
        media: <img src={selection.url} alt={selection.alt} />,
      };
    },
  },
};
