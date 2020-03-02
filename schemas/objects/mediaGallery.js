import MediaGalleryPreview from '../../components/mediaGalleryPreview/mediaGalleryPreview';

export default {
  name: 'mediaGallery',
  title: 'Media Gallery',
  description: 'A gallery of images / video',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Gallery Items',
      type: 'array',
      of: [
        {
          type: 'captionedImage',
        },
        {
          type: 'captionedVideo',
        },
      ],
      validation: (Rule) => [Rule.min(2).error('A gallery needs at least two items')],
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    component: MediaGalleryPreview,
  },
};
