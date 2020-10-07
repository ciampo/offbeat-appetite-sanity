import { MdImage } from 'react-icons/md';
import { MdVideocam as MdVideoCam } from 'react-icons/md';
import { MdPermMedia } from 'react-icons/md';
import { MdRestaurantMenu } from 'react-icons/md';

import { portableTextMarks, portableTextLists } from '../common/portableText';

export default {
  name: 'richPortableText',
  type: 'array',
  title: 'Content',
  description: 'Rich portable text allowing custom blocks.',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: portableTextLists,
      marks: portableTextMarks,
    },
    {
      type: 'captionedImage',
      icon: MdImage,
    },
    {
      type: 'captionedVideo',
      icon: MdVideoCam,
    },
    {
      type: 'mediaGallery',
      icon: MdPermMedia,
    },
    {
      type: 'recipe',
      icon: MdRestaurantMenu,
    },
  ],
};
