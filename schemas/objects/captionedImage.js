import { generateImageField } from '../common/image';

export default generateImageField({
  name: 'captionedImage',
  title: 'Captioned image',
  description: 'An image with an optional caption',
  altText: true,
  caption: true,
});
