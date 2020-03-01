import React from 'react';

export default {
  name: 'captionedVideo',
  title: 'Captioned Video',
  type: 'file',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      description: 'Label only used in the CMS to easily recognise each video',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'poster',
      type: 'image',
      title: 'Poster image',
      description: 'The poster image used before the video is played',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Caption text will be displayed under the video',
    },
  ],
  options: {
    storeOriginalFilename: false,
    accept: 'video/mp4',
  },
  preview: {
    select: {
      alt: 'label',
      caption: 'caption',
      url: 'poster.asset.url',
    },
    prepare(selection) {
      return {
        title: `[video] ${selection.alt}`,
        subtitle: selection.caption,
        media: selection.url ? <img src={selection.url} alt={selection.alt} /> : null,
      };
    },
  },
};
