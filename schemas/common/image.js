export const generateImageField = ({
  name,
  title,
  description,
  altText,
  caption,
  disableHotspot,
}) => ({
  name,
  type: 'image',
  title,
  description,
  fields: [
    altText
      ? {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Used to describe the contents of the image to assistive technology',
          options: {
            isHighlighted: true,
          },
          validation: (Rule) => Rule.required(),
        }
      : null,
    caption
      ? {
          name: 'captioon',
          type: 'string',
          title: 'Caption',
          description: 'Caption text will be displayed under the image',
          options: {
            isHighlighted: true,
          },
        }
      : null,
  ].filter((item) => item !== null),
  options: {
    hotspot: !disableHotspot,
    storeOriginalFilename: false,
    metadata: ['palette'],
    accept: '.png, .jpg, .jpeg',
  },
  validation: (Rule) => Rule.required(),
});
